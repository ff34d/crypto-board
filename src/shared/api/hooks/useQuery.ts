import type { AxiosError, AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export function useQuery<D>(requestHandler: () => Promise<AxiosResponse<D>>) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<D | undefined>()
  const [error, setError] = useState<AxiosError | undefined>()

  const request = async () => {
    setIsLoading(true)

    try {
      const res = await requestHandler()
      setData(res.data)
    } catch (error) {
      setError(error as AxiosError)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!data) request()
  }, [])

  return { isLoading, data, error }
}
