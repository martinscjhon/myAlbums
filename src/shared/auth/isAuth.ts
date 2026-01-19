import { getLocalstorage } from ".";

export const handleIsAuthentication = (): boolean => {
  const token = getLocalstorage("token");
  return !!token;
};
