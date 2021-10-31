import React from "react";

export const SanojaJäljellä: React.FunctionComponent<{
  peliLoppu: boolean;
  kysyttävänSananJärjestysnumero: number;
  kaikkienSanojenLukumäärä: number;
}> = ({
  peliLoppu,
  kysyttävänSananJärjestysnumero,
  kaikkienSanojenLukumäärä,
}) => (
  <>
    {!peliLoppu && (
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          Sana {kysyttävänSananJärjestysnumero}/{kaikkienSanojenLukumäärä}
        </div>
      </div>
    )}
  </>
);
