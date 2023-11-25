import {
  ALPHA_NUMERIC_REGEX,
  CHAR_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
} from "./regex.config";

export const isValidCharacter = (char) => CHAR_REGEX.test(char);
export const isValidIndianPhoneNum = (num) => PHONE_REGEX.test(num);
export const isValidEmail = (email) => EMAIL_REGEX.test(email);
export const isAlphaNumeric = (char) => ALPHA_NUMERIC_REGEX.test(char);
export const isValidPassword = (char) => PASSWORD_REGEX.test(char);
