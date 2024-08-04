/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

export default function useFetch(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setData(data)
      }).catch((error) => {
        setError(error);
        setData(null);
        setError(null)
      });
  },[url])
  
  return {data, loading , error};

 
}
