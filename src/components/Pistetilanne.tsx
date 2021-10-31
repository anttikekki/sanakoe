import React from "react";

export const Pistetilanne: React.FunctionComponent<{
  tiedettyjenSanojenLukumaara: number;
  väärinMenneidenSanojenLukumaara: number;
}> = ({ tiedettyjenSanojenLukumaara, väärinMenneidenSanojenLukumaara }) => (
  <div className="row justify-content-md-center">
    <div className="col col-lg-4">
      <p>Oikein: {tiedettyjenSanojenLukumaara}</p>
      <p>Väärin: {väärinMenneidenSanojenLukumaara}</p>
    </div>
  </div>
);
