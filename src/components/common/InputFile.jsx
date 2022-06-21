import React from "react";

const InputFile = ({ name, label, className, error, ...rest }) => {
  return (
    <div className={className}>
      <label htmlFor={name}>
        Select Image
        <input {...rest} name={name} id={name} type="file" />
      </label>
      {error && (
        <div className="error-message">
          <span className="error-symbol">&#9888;</span>
          {error}
        </div>
      )}
    </div>
  );
};

export default InputFile;
