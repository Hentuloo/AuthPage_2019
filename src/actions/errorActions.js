export const errorConstants = {
  ERROR_STATEMENT_SET: 'ERROR_STATEMENT_SET',
  ERROR_STATEMENT_RESET: 'ERROR_STATEMENT_RESET',
};

export const setError = errorType => ({
  type: errorConstants.ERROR_STATEMENT_SET,
  payload: { ...errorType },
});
export const resetError = () => ({
  type: errorConstants.ERROR_STATEMENT_RESET,
});
