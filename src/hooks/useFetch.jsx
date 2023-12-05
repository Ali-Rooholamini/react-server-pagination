import { useEffect, useState } from "react";

const useFetch = (url, body) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json;Charset-UTF-8",
      },
    });

    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [body.page]);

  return [data, isLoading];
};

export default useFetch;
