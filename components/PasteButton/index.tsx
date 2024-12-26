"use client";

import readClipboardText from "@/utils/readClipboardText";
import { GoPaste } from "react-icons/go";
import { phoneMaxLength } from "../../utils/phone/constants";
import { useCallback } from "react";
import useClipboard from "@/app/store/useClipboard";
import toNumber from "@/utils/phone/toNumber";

export type PasteButtonProps = {
  onPaste?: (value: string | undefined) => void;
};

const PasteButton = ({ onPaste }: PasteButtonProps) => {
  const { setCanReadText, readText, setReadText } = useClipboard();

  const tooltipStyles = !!readText
    ? " before:pointer-events-none before:!bg-opacity-25 tooltip"
    : "";

  const clipboardTextToPhone = (value: string | void): string => {
    const allNumbers = toNumber(value);
    console.log({ allNumbers });

    if (allNumbers?.length === 0) return "";

    const phone = allNumbers?.slice(0, phoneMaxLength);
    const formatedPhoneNumber = `+55${phone}`;

    return formatedPhoneNumber;
  };

  const handlePaste = useCallback(async () => {
    const value = await readClipboardText();
    const formatedPhoneNumber = clipboardTextToPhone(value);

    if (onPaste) {
      onPaste(formatedPhoneNumber);
      setCanReadText(true);
      setReadText(formatedPhoneNumber);
    }
  }, [onPaste, setCanReadText, setReadText]);

  return (
    <button
      className={`btn btn-neutral btn-sm btn-square normal-case px-0 absolute top-0 right-2 bottom-0 mt-auto mb-auto grayscale${tooltipStyles}`}
      data-tip="Clique para colar"
      id="clipboard"
      onClick={handlePaste}
    >
      <GoPaste size="18" className="m-auto transition-none" />
    </button>
  );
};

export default PasteButton;
