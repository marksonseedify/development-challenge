import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const shorten = async (url: string) => {
  const result = await axios.post(API_URL, {
    url,
  });

  return result;
};

export const getShortenedURLs = async () => {
  const result = await axios.get(API_URL);

  return result;
}
