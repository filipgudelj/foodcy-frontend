import React, { useEffect } from "react";
import LoggedInNavbar from "./../parts/LoggedInNavbar";
import AdviceComponent from "../parts/AdviceComponent";
import { useDispatch } from "react-redux";
import { setAdvice } from "../../redux/actions/adviceActions";
import axios from "axios";
import Navbar from "./../parts/Navbar";
import Footer from "./../parts/Footer";
import "../../styles/pages/advicePage.css";

const AdvicePage = () => {
  const dispatch = useDispatch();

  const fetchAdvice = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_URI}api/advice`)
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response);
    dispatch(setAdvice(response.data["hydra:member"]));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="advice-wrapper">
      {localStorage.getItem("user") ? (
        <LoggedInNavbar className="navbar" />
      ) : (
        <Navbar className="navbar" />
      )}
      <div className="advice-list">
        <AdviceComponent />
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default AdvicePage;
