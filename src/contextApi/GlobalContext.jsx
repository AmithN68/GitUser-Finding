import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export let GlobalContextApi = createContext();

const GlobalContextProvider = ({ children }) => {
    let [user, setUser] = useState([]);
  let [loading, setLoading] = useState(false);
  let [repos, setRepos] = useState(null);
    let client_id = "Iv1.009d26b375029bad";
  let client_secret = "2d266a09b532647361bf0d52c17ad82f596ca37b";
  
  let OnTermSubmit = async term => {
    try {
        let { data } = await axios.get(
          `https://api.github.com/users/${term}?client_id=${client_id}&client_secret=${client_secret}`
        );
        // console.log(data);
        setLoading(true);
      setUser(data);
      let rep = await axios.get(`https://api.github.com/users/${term}/repos`);
      setRepos(rep.data);
    } catch (error) {
        console.log(error);
      }  
      setLoading(false);
    };
    useEffect(() => {
        OnTermSubmit("AmithN68");
    },[])
  return (
      <GlobalContextApi.Provider value={{ OnTermSubmit, user, loading,repos }}>
      {children}
    </GlobalContextApi.Provider>
  );
};

export default GlobalContextProvider;
