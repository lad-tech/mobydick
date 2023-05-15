export const timeValidation = (time: string): boolean => {
  const pattern = /^(?:0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return pattern.test(time);
};
