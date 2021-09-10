
export const env = (envValue: string | undefined) => {
  return envValue == null ? "" : envValue;
}
