// @flow

import { useMutation, type GraphQLTaggedNode, type Variables } from '@adeira/relay';
import { fbt } from 'fbt';
import { type Node } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { Button, useFlashMessages, FlashMessageTint } from '@adeira/sx-design';

import {
  formStateAtomFamily,
  formStateAtomFamilyErrors,
  formStateAtomFamilyIds,
  formStateUploadables,
} from './private/formState';

type Props = {
  +children: FbtWithoutString,
  +mutation: GraphQLTaggedNode,
  +variables: ($FlowFixMe) => Variables,
  +onCompleted: (response: $FlowFixMe) => void,
};

/**
 * This is where all the form submit logic happens. The following steps are being performed:
 *
 * 1. we display all error messages if any (might be still hidden) and block the submission
 * 2. we collect all the values and convert them to mutation variables if everything is OK
 * 3. call the mutation
 */
export default function FormSubmit(props: Props): Node {
  const ids = useRecoilValue(formStateAtomFamilyIds);
  const uploadables = useRecoilValue(formStateUploadables);
  const [displayFleshMessage] = useFlashMessages();

  const unmaskFormFieldErrors = useRecoilCallback(({ snapshot, set }) => (id) => {
    const errorsAtom = formStateAtomFamilyErrors(id);
    const errorsAtomContents = snapshot.getLoadable(errorsAtom).contents;
    /* $FlowFixMe[incompatible-use] This comment suppresses an error when
     * upgrading Recoil to version 0.7.4. To see the error delete this comment
     * and run Flow. */
    /* $FlowFixMe[prop-missing] This comment suppresses an error when upgrading
     * Recoil to version 0.7.4. To see the error delete this comment and run
     * Flow. */
    const hasErrors = errorsAtomContents.validationError != null;
    if (hasErrors === true) {
      // We re-render only fields with an error.
      set(errorsAtom, (prevState) => ({
        ...prevState,
        validationErrorHidden: false,
      }));
    }
    return hasErrors;
  });

  const getFormFieldValue = useRecoilCallback(({ snapshot }) => (id) => {
    return snapshot.getLoadable(formStateAtomFamily(id)).contents;
  });

  // eslint-disable-next-line relay/generated-flow-types -- discovered when upgrading Relay Eslint plugin, FIXME
  const [runMutation, isMutationInProgress] = useMutation(props.mutation);

  const handleButtonClick = (event) => {
    event.preventDefault();

    let hasErrors = false;
    const formValues = {};
    ids.forEach((id) => {
      const hasFieldErrors = unmaskFormFieldErrors(id);
      if (hasFieldErrors === true) {
        hasErrors = hasFieldErrors;
      }
      formValues[id] = getFormFieldValue(id);
    });

    if (hasErrors === true) {
      return;
    }

    // Convert form values to GraphQL mutation variables:
    const variables = props.variables(formValues);

    // Run the mutation:
    const mutationConfig = {
      uploadables: undefined,
      variables,
      onCompleted: props.onCompleted,
      onError: () => {
        displayFleshMessage(
          fbt(
            'Something unexpected happened and server could not process the request! 🙈',
            'generic failure message after creating a product',
          ),
          { tint: FlashMessageTint.Error },
        );
      },
    };
    if (uploadables != null) {
      mutationConfig.uploadables = uploadables;
    }
    /* $FlowFixMe[class-object-subtyping] This comment suppresses an error when
     * upgrading Recoil to version 0.7.4. To see the error delete this comment
     * and run Flow. */
    runMutation(mutationConfig);
  };

  return (
    <Button type="submit" onClick={handleButtonClick} isDisabled={isMutationInProgress}>
      {props.children}
    </Button>
  );
}
