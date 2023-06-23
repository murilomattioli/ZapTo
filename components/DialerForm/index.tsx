"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, useForm } from "react-hook-form";
import schema from "./schema";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import Input from "react-phone-number-input/input";
import React from "react";
import { E164Number } from "libphonenumber-js/types";
import { DialerTo } from "./types";
import { phonePlaceholder } from "./constants";

const DialerForm = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const {
    watch,
    setValue,
    control,
    trigger,
    formState: { submitCount, errors },
    clearErrors,
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

  const onChangePhone = (value?: E164Number | undefined) => {
    const phoneString = value?.toString() ?? "";
    setValue("phone", phoneString);
    trigger("phone");
  };

  const clearPhoneFocus = () => {
    inputRef?.current?.blur();
  };

  return (
    <Form
      className="flex flex-col px-4 md:px-0 max-w-xs self-center w-full "
      control={control}
    >
      <div className="form-control mb-2">
        <span className="sr-only">Phone</span>
        <label className="label">
          <span className="label-text text-zinc-400">Discar para:</span>
        </label>
        <Input
          ref={inputRef}
          country="BR"
          defaultCountry="BR"
          value={watch("phone")}
          international={false}
          placeholder={phonePlaceholder}
          onChange={onChangePhone}
          className={`phone-input ${showError ? "!input-error" : ""}`}
        />
        <label className="label">
          <span className="label-text-alt text-error">
            &nbsp;{showError ? "Número inválido!" : ""}
          </span>
          <span className="label-text-alt text-error">
            &nbsp;{showError ? errorMessage : ""}
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
