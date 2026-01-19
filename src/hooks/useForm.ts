import { useState, useCallback } from "react";

export interface IUseFormState<T> {
  payload: T;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  setPayload: (data: T) => void;
}

export function useForm<T extends Record<string, any>>(
  initialState: T,
): IUseFormState<T> {
  const [payload, setPayload] = useState<T>(initialState);

  const change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const reset = useCallback(() => {
    setPayload(initialState);
  }, [initialState]);

  return {
    payload,
    change,
    reset,
    setPayload,
  };
}
