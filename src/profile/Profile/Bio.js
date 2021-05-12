import React from "react";
import { Loader } from "react-feather";

const Bio = () => {
  return (
    <div>
      <h6>
        {" "}
        <Loader size="18px" /> Passionnée par l'univers du web
        <Loader size="18px" />
      </h6>
      <h6>
        <Loader size="18px" /> Diplômée de l'Ecole Nationale d'Electronique et
        Telecommunications de Sfax
        <Loader size="18px" />{" "}
      </h6>
      <h6>
        {" "}
        <Loader size="18px" /> Actuellement en formation developpeur web full
        stack javascript
        <Loader size="18px" />
      </h6>
    </div>
  );
};

export default Bio;
