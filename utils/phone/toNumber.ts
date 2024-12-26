const toNumber = (phone: string | null | undefined | void) => {
  if (!phone) return;

  const allNumbers = phone?.replace("+55", "").replace(/\D/g, "");
  const hasNumber = allNumbers?.length > 0;
  if (!hasNumber) return;
  return allNumbers;
};

export default toNumber;
