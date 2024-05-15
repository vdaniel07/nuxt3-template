import { Notify } from '~/stores/notification';

export const useFetchApi = <Type>(url: string, options = {}) => {
  const config = useRuntimeConfig();
  return $fetch<Type>(url, {
    baseURL: config.public.baseURL,
    ...options,
    retry: 0,
    onRequest({ request, options }) {
      console.log('[fetch request]', request, options);

      // const headers = new Headers(options.headers);
      // headers.set('Authorization', 'Bearer Token');

      // options.headers = headers;
    },
    onRequestError({ request, error }) {
      console.log('[fetch request error]', request, error);
      Notify.warningStrong(`No response. Message: ${error.message}`);
    },
    onResponse({ response }) {
      console.log('[fetch response]', response);
    },
    onResponseError({ response }) {
      console.error('Fetch API error: ', response);
      if (response._data.message) {
        const message = response._data.message;
        const messageDetail = response._data.detail ? `${message} - ${response._data.detail}` : message;
        Notify.warningStrong(messageDetail);
      } else {
        Notify.warningStrong(`status: ${response.status}, message: ${response.statusText}`);
      }
    }
  });
};
