import { useState, useEffect } from 'react';

export const useFetch = (callback) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (page) => {
    try {
      const data = await callback(page);
      setLoading(true);
      return data;
    } catch (error) {
      console.log(`${error}`);
      setError(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  return [fetching, loading, error];
};
