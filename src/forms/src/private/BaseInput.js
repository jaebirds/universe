// @flow

import sx from '@adeira/sx';
import { useRef, type Node, useContext } from 'react';

import BaseInputWrapper from './BaseInputWrapper';
import FormRootContext from '../FormRootContext';
import useFormFieldState from './useFormFieldState';

type PropsBase = {
  +'label': FbtWithoutString,
  +'name': string,
  +'data-testid'?: string,
  +'required'?: boolean,
};

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
type PropsText = $ReadOnly<{
  ...PropsBase,
  +type: 'text',
  +value: string,
}>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
type PropsEmail = $ReadOnly<{
  ...PropsBase,
  +type: 'email',
  +value: string,
}>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password
type PropsPassword = $ReadOnly<{
  ...PropsBase,
  +type: 'password',
}>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
type PropsNumber = $ReadOnly<{
  ...PropsBase,
  +type: 'number',
  +value: number,
  +min?: number,
  +max?: number,
  +step?: number | 'any',
}>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
type PropsFile = $ReadOnly<{
  ...PropsBase,
  +type: 'file',
  +multiple: boolean,
  +accept: string,
}>;

type Props = PropsText | PropsEmail | PropsPassword | PropsNumber | PropsFile;

/**
 * This is a generic input component with very wide API (similar to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
 * It's not recommended to use this component directly. Instead, use `FormText`, `FormNumber`, …
 */
export default function BaseInput(props: $ReadOnly<Props>): Node {
  const inputRef = useRef(null);
  const formRootContext = useContext(FormRootContext);
  const [inputValue, updateInputValue, inputErrors] = useFormFieldState(
    inputRef,
    props.name,
    props.type === 'file' ? [] : props.value,
    props.label,
  );

  const handleOnChange = (event: SyntheticEvent<HTMLInputElement>) => {
    if (props.type === 'file') {
      formRootContext.setUploadables(event.currentTarget.files);
    }

    updateInputValue(
      inputRef,
      props.type === 'file'
        ? Array.from(event.currentTarget.files ?? []).map((file) => file.name)
        : event.currentTarget.value,
    );
  };

  const hasError =
    inputErrors.validationError != null && inputErrors.validationErrorHidden === false;

  // eslint-disable-next-line prefer-object-spread
  const extraConditionalProps = Object.assign(
    ({}: $FlowFixMe),
    props.type === 'number' ? { min: props.min, max: props.max, step: props.step } : {},
    props.type === 'file'
      ? { accept: props.accept, multiple: props.multiple }
      : { value: inputValue },
  );

  return (
    <BaseInputWrapper
      label={props.label}
      required={props.required}
      hasValidationError={hasError}
      validationError={inputErrors.validationError}
    >
      <input
        data-testid={props['data-testid']}
        className={styles({
          input: true,
          inputError: hasError,
        })}
        ref={inputRef}
        type={props.type}
        name={props.name}
        onChange={handleOnChange}
        required={props.required}
        {...extraConditionalProps}
      />
    </BaseInputWrapper>
  );
}

const styles = sx.create({
  input: {
    width: '100%',
    border: '2px solid rgba(var(--sx-accent-2))',
    borderRadius: 5,
    padding: '8px 12px',
  },
  inputError: {
    border: '2px solid rgba(var(--sx-error))',
  },
});
