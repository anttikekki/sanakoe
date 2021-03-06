import React from "react";

export const Otsikko: React.FunctionComponent = () => (
  <div className="row justify-content-md-center">
    <div className="col col-lg-4">
      <h1>Sanakoe</h1>
      <p>
        Opetushallituksen{" "}
        <a href="https://www.oph.fi/fi/oppimateriaali/cadeau/cadeau-1">
          Caudeau 1
        </a>
        - ja{" "}
        <a href="https://www.oph.fi/fi/oppimateriaali/cadeau/cadeau-2">
          Caudeau 2
        </a>{" "}
        -kirjojen kappaleiden sanojen epävirallinen sanakoe.
      </p>
    </div>
  </div>
);
