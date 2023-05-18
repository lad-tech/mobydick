export const isValidMessageTime = (time: string): boolean => {
  const pattern = /^([01][\d]|2[0-3]):[0-5][\d]$/;
  return pattern.test(time);
};
