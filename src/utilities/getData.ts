import { instance, timeURL } from "./axios";
import { useQuery } from "@tanstack/react-query";

type KeysType = (string | number)[];
type OptionsType = {
  [key: string]: any;
};

export const useGetData = (
  keys: KeysType,
  url: string,
  options?: OptionsType
) => {
  return useQuery(keys, () => instance.get(url).then((r) => r?.data), options);
};

export const useGetTime = (
  keys: KeysType,
  url: string,
  options?: OptionsType
) => {
  return useQuery(keys, () => timeURL.get(url).then((r) => r?.data), options);
};
