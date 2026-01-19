export const getLocalstorage = (key: string) => {
  const list: any = localStorage.getItem(`@MYALBUMS-${key}`);

  return JSON.parse(list ?? null);
};

export const setLocalstorage = (key: string, data: any) => {
  localStorage.setItem(`@MYALBUMS-${key}`, JSON.stringify(data));
  return true;
};

export const detLocalstorage = (key: string) => {
  localStorage.removeItem(`@MYALBUMS-${key}`);
  return true;
};

export const getToken = () => getLocalstorage("token");

export const logout = () => {
  detLocalstorage("token");
  window.location.href = "/";
};
