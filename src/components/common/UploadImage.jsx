import React, { Component } from "react";
import axios from "axios";
import "../../styles/parts/uploadImage.css";

class UploadImage extends Component {
  state = { files: [], image: [], clicked: false };

  config() {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
  }

  selectedFileHandler = (e) => {
    this.setState({ files: e.target.files });
    console.log(e.target.files[0]);
  };

  uploadFileHandler = async () => {
    const img = [];
    const fd = new FormData();
    fd.append("file", this.state.files[0], this.state.files[0]);
    console.log(fd);
    const response = await axios
      .post(`${process.env.REACT_APP_API_URI}api/images`, fd, this.config())
      .then((res) => {
        img.push(res.data["@id"].toString());
        this.setState({ image: img });
        this.props.parentCallback(img.toString());
      });
    this.setState({ clicked: true });
  };

  render() {
    return (
      <div className="img-upload-container">
        <label className="img-input-label">
          Select Image
          <input
            type="file"
            className="img-input"
            onChange={this.selectedFileHandler}
          ></input>
        </label>
        <button className="img-btn" onClick={this.uploadFileHandler}>
          Send Image
        </button>
        {this.state.clicked === true ? (
          <span className="upload-text-true">Done!</span>
        ) : (
          <span className="upload-text-false">
            {" "}
            Send image before clicking Create!
          </span>
        )}
      </div>
    );
  }
}

export default UploadImage;
