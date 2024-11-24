import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useFetch = (url, dependency) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null); // Start with null or suitable default value
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const result = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        navigate("/ErrorPage");
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, [url, dependency, navigate]); // Include `url` and `navigate` in the dependency array

  return { data, loading, error }; // Return additional state for flexibility
};

export default useFetch;
