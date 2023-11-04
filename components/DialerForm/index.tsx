"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, useForm } from "react-hook-form";
import schema from "./schema";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import React from "react";
import { E164Number } from "libphonenumber-js/types";
import { DialerTo } from "./types";
import { completePhoneNumberMaxLength, phonePlaceholder } from "./constants";
import PasteButton from "../PasteButton";
import PhoneInput from "../PhoneInput";

const DialerForm = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const {
    watch,
    setValue,
    trigger,
    formState: { submitCount, errors },
    clearErrors,
    control,
  } = useForm({
    defaultValues: { phone: "" },
    resolver: yupResolver(schema),
  });
  const isEmpty = watch("phone") === "";
  const errorMessage = errors.phone?.message;
  const showError = errorMessage && submitCount > 0 && !isEmpty;
  const canRedirect = !errorMessage && !isEmpty && !showError;

  const dialerTo = (to: DialerTo) => () => {
    if (!canRedirect) return inputRef?.current?.focus();

    const link = `https://${to}.me/${watch("phone")}`;
    window.open(link, "_blank");
    return clearErrors();
  };
  const onChangePhone = (value?: E164Number | string | undefined) => {
    const phoneString = value?.toString() ?? "";
    const isValid =
      !!phoneString.length &&
      phoneString.length <= completePhoneNumberMaxLength;
    if (!isValid) return;

    const formated = isValid
      ? phoneString
      : phoneString?.slice(0, completePhoneNumberMaxLength);

    setValue("phone", formated);
    trigger("phone");
  };

  const clearPhoneFocus = () => {
    inputRef?.current?.blur();
  };

  return (
    <Form
      className="flex flex-col px-4 md:px-0 max-w-xs self-center w-full bg-black"
      control={control}
    >
      <div className="form-control mb-8 mt-[16px]">
        <span className="sr-only">Phone</span>
        <label className="label">
          <span className="label-text text-zinc-300">Discar para:</span>
        </label>
        <div className="phone-input-wrapper relative">
          <PhoneInput
            ref={inputRef}
            value={watch("phone")}
            onChange={onChangePhone}
            placeholder={phonePlaceholder}
            error={showError}
          />
          <PasteButton onPaste={onChangePhone} />
        </div>
        <label className="label">
          <span className="label-text-alt text-error">
            {showError ? errors.phone?.message : ""}
          </span>
        </label>
      </div>
      <div className="flex flex-row-reverse">
        <span className="sr-only">Submit</span>
        <button hidden type="submit" onClick={clearPhoneFocus} />
        <button
          className="flex flex-1 btn btn-primary btn-outline normal-case px-0 disabled:opacity-50"
          onClick={dialerTo("wa")}
          data-theme="whatsApp"
          disabled={!canRedirect}
        >
          <span className="!text-white">WhatsApp</span>
          <RiWhatsappFill size="24" />
        </button>
        <button
          className="flex flex-1 btn btn-secondary btn-outline normal-case mr-4 px-0 disabled:opacity-50"
          onClick={dialerTo("t")}
          disabled={!canRedirect}
        >
          <span className="text-white">Telegram</span>
          <FaTelegramPlane size="24" />
        </button>
      </div>
    </Form>
  );
};

export default DialerForm;
