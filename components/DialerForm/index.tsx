"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { Form, useForm } from "react-hook-form";
import schema from "./schema";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { GoPaste } from "react-icons/go";
import Input from "react-phone-number-input/input";
import React, { useCallback, useEffect } from "react";
import { E164Number } from "libphonenumber-js/types";
import { DialerTo } from "./types";
import {
  completePhoneNumberMaxLength,
  phoneMaxLength,
  phonePlaceholder,
} from "./constants";
import readClipboardText from "@/utils/readClipboardText";

const DialerForm = () => {
  const router = useRouter();
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

  const onChangePhone = useCallback(
    (value?: E164Number | string | undefined) => {
      const phoneString = value?.toString() ?? "";
      const isValid = phoneString.length <= completePhoneNumberMaxLength;
      const formated = isValid
        ? phoneString
        : phoneString?.slice(0, completePhoneNumberMaxLength);
      console.log({ isValid, formated });

      setValue("phone", formated);
      trigger("phone");
    },
    [setValue, trigger]
  );

  const clearPhoneFocus = () => {
    inputRef?.current?.blur();
  };

  const handlePaste = async () => {
    const value = await readClipboardText();
    const allNumbers = value?.replace(/\D/g, "");
    const validNumbers = allNumbers?.slice(0, phoneMaxLength);
    const formatedPhoneNumber = `+55${validNumbers}`;
    onChangePhone(formatedPhoneNumber);
  };

  return (
    <Form
      className="flex flex-col px-4 md:px-0 max-w-xs self-center w-full bg-black"
      control={control}
    >
      <div className="form-control mb-2">
        <span className="sr-only">Phone</span>
        <label className="label">
          <span className="label-text text-zinc-300">Discar para:</span>
        </label>
        <div className="phone-input-wrapper relative">
          <Input
            country="BR"
            defaultCountry="BR"
            ref={inputRef}
            value={watch("phone")}
            international={false}
            onChange={onChangePhone}
            placeholder={phonePlaceholder}
            className={`phone-input ${showError ? "!input-error" : ""}`}
          />
          <button
            className="btn btn-square normal-case px-0 absolute top-0 right-1 bottom-0 mt-auto mb-auto btn-sm opacity-80"
            id="clipboard"
            onClick={handlePaste}
          >
            <GoPaste size="18" />
          </button>
        </div>
        <label className="label">
          <span className="label-text-alt text-error">
            &nbsp;{showError ? "Número inválido!" : ""}
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
