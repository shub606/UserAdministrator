import {
  ErrorText,
  Input,
  InputContainer,
  InputTitle,
} from "./InputTextView.Styles";

const InputTextView = ({
  label,
  name,
  onChange,
  placeholder,
  type,
  value,
  errorMessage,
  hasError,
}) => {
  return (
    <InputContainer>
      <InputTitle>{label}</InputTitle>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <ErrorText>{hasError && errorMessage}</ErrorText>
    </InputContainer>
  );
};

InputTextView.defaultProps = {
  type: "text",
  placeholder: "Enter value",
  errorMessage: "Please enter valid data",
  hasError: false,
};

export default InputTextView;
