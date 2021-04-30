import React from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Loading/Loading.css";

function Loading() {
  return (
    <div className="divFather">
      <div className="divChildren">
        <Spinner color="primary" className="spinner"/>
      </div>
    </div>
  );
}

export default Loading;
