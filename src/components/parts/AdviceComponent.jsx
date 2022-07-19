import React from "react";
import { useSelector } from "react-redux";
import Author from "./Author";
import "../../styles/parts/adviceComponent.css";

const AdviceComponent = () => {
  const advice = useSelector((state) => state.allAdvice.advice);
  const renderList = advice.map((advice) => {
    const { id, title, content, author } = advice;
    return (
      <div className="single-advice-wrapper" key={id}>
        <div className="single-advice-wrapper-title">{title}</div>
        <div className="single-advice-wrapper-content">{content}</div>
        {localStorage.getItem("user") ? (
          <Author author={author} className="author" />
        ) : null}
      </div>
    );
  });
  return renderList;
};

export default AdviceComponent;
