export const useContextError = (value, error) => {
  if (!value) {
    throw new Error(error);
  }
};
