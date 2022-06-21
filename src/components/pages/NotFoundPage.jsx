import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/notFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="content">
        <h2>404</h2>
        <h4>Oops! Page not found.</h4>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <button className="btn" onClick={() => navigate("/")}>
          RETURN HOME
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
