import React, { createContext, useContext, useState } from "react";
const Resultcontext = createContext();
import axios from "axios";
export const ResultcontextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("yuvraj");

  const getResults = async (type) => {
    setIsLoading(true);

    const options = {
      method: "GET",
      url: "https://google-web-search1.p.rapidapi.com/",
      params: {
        query: type,
        limit: "20",
        related_keywords: "true",
      },
      headers:{
        'X-RapidAPI-Key': '701a09cd78msh610b9a73cab0b96p1b7006jsn87e76bf42663',
        'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
      },
    };

    try {
      const response = await axios.request(options);

      setResults(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Resultcontext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </Resultcontext.Provider>
  );
};
export const useResultContext = () => useContext(Resultcontext);
