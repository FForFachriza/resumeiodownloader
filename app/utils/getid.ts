export const getId = (url: string): string => {
  const regex = /[A-Za-z]+:\/\/[A-Za-z]+\.io\/r\//i;
  const textid: string = url.replace(regex, "");
  return textid;
};
