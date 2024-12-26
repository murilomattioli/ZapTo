const minLength = (value: string | undefined) => {
  const allDigitsExceptCountryCode = value?.slice(3);
  const minLength = 10;
  const isValid = Number(allDigitsExceptCountryCode?.length) >= minLength;
  return isValid;
};

const isValid = (value: string) => {
  const allDigitsExceptCountryCode = value?.slice(3);
  const rules = [
    allDigitsExceptCountryCode?.length === 10,
    allDigitsExceptCountryCode?.length === 11,
  ];
  const isValid = rules.some((rule) => rule);
  return isValid;
};
