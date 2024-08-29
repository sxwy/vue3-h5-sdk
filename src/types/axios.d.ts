// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'

// https://github.com/axios/axios/issues/1510
declare module 'axios' {
  export interface AxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<T>
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    post<T = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig
    ): Promise<T>
    put<T = any>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T>
    patch<T = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig
    ): Promise<T>
    postForm<T = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig
    ): Promise<T>
    putForm<T = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig
    ): Promise<T>
    patchForm<T = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig
    ): Promise<T>
  }
}
