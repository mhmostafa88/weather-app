import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useRequest = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((results) => {
        setLoading(false);
        setData(results.data);
      })
      .catch((err) => {
          toast.error('Error loading data, check spellings')
      });
  }, [url]);

  return { loading, data };
};

export default useRequest;
