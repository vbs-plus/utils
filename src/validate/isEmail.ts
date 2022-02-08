export default (data: string): boolean => {
  return /^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(data);
};
