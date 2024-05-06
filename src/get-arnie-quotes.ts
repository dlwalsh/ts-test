import { httpGet } from "./mock-http-interface";

type TResult = { "Arnie Quote": string } | { FAILURE: string };

export const getArnieQuotes = async (urls: string[]): Promise<TResult[]> => {
  const responses = await Promise.all(urls.map(httpGet));

  return responses.map(({ status, body }) => {
    const { message } = JSON.parse(body); // input validation not required

    if (status === 200) {
      return { "Arnie Quote": message };
    }

    return { FAILURE: message };
  });
};
