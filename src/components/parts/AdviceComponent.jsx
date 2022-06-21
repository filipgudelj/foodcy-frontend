import React from "react";
import { useSelector } from "react-redux";
import "../../styles/parts/adviceComponent.css";

const AdviceComponent = () => {
  const advice = useSelector((state) => state.allAdvice.advice);
  const renderList = advice.map((advice) => {
    const { id, title, content } = advice;
    return (
      <div className="single-advice-wrapper" key={id}>
        <div className="single-advice-wrapper-title">{title}</div>
        <div className="single-advice-wrapper-content">{content}</div>
      </div>
    );
  });
  return renderList;
};

export default AdviceComponent;
