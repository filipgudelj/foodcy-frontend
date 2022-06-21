import React from "react";

const Textarea = ({ name, label, className, error, ...rest }) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} name={name} id={name} />
      {error && (
        <div className="error-message">
          <span className="error-symbol">&#9888;</span>
          {error}
        </div>
      )}
    </div>
  );
};

export default Textarea;
