"use client";
import { forwardRef, useEffect } from "react";
import ReactPhoneNumberInput, {
  Props as PhoneInputComponentType,
} from "react-phone-number-input/input";
import { E164Number } from "libphonenumber-js/types";
import { inputMaxLength } from "../../utils/phone/constants";

export interface PhoneInputProps
  extends Omit<PhoneInputComponentType<Partial<HTMLInputElement>>, "onChange"> {
  value?: E164Number | string | undefined;
  onChange: (value?: string | undefined) => void;
  error?: string | boolean | undefined;
  success?: string | boolean | undefined;
}

const PhoneInput = forwardRef(function Input(props: PhoneInputProps, ref) {
  const { value, onChange, placeholder, error, success } = props;

  const status = !!success ? "primary" : !!error ? "error" : undefined;
  const inputStatus = status ? ` !input-${status}` : "";

  useEffect(() => {
    const defineMaxLength = () => {
      const inputRef = ref as React.MutableRefObject<HTMLInputElement>;
      inputRef?.current?.setAttribute("maxlength", inputMaxLength.toString());
    };
    defineMaxLength();
  }, [ref]);

  const handleOnChange = (value?: E164Number | undefined) => {
    navigator.vibrate(10);

    if (onChange) onChange(value);
  };

  return (
    <ReactPhoneNumberInput
      country="BR"
      defaultCountry="BR"
      ref={ref}
      value={value}
      international={false}
      onChange={handleOnChange}
      placeholder={placeholder}
      className={`phone-input${inputStatus}`}
      data-theme="whatsapp"
      autofocus="true"
      tabindex="0"
    />
  );
});

export default PhoneInput;
