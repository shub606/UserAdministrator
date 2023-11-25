export const CHAR_REGEX = /^[a-zA-Z' ']+$/;
export const PHONE_REGEX = /^[0]?[6789]\d{9}$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?!.*\s)[A-Za-z\d@$!%*?&]{8,}$/;
