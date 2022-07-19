import React, { Component } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Author = (props) => {
  const [username, setUsername] = useState("");
  const config = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
  };
  const fetchAuthorDetails = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_URI}${props.author.slice(1)}`, config())
      .catch((err) => {
        console.log("Err", err);
      });
    setUsername(response.data.username);
  };
  useEffect(() => {
    fetchAuthorDetails();
  }, []);
  return <div className={props.className}>{username}</div>;
};

export default Author;
