import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { axiosInstance } from "./axiosInstance"

interface Props<D> {
  method: "POST" | "GET"
  url: string
  data?: D
  config?: AxiosRequestConfig<D>
}

export async function http<R = unknown, D = unknown>({
  method,
  url,
  data,
  config,
}: Props<D>): Promise<AxiosResponse<R, D>> {
  try {
    const res =
      method === "POST"
        ? await axiosInstance.post(url, data, config)
        : await axiosInstance.get(url, config)

    return res
  } catch (error) {
    throw error as AxiosError
  }
}
