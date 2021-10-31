import React from "react";
import { Kieli, Sana } from "../types";

export const KysyttäväSana: React.FunctionComponent<{
  peliLoppu: boolean;
  näytäSana: boolean;
  kieli: Kieli;
  sana: Sana;
}> = ({ peliLoppu, näytäSana, kieli, sana }) => (
  <>
    {!peliLoppu && !näytäSana && (
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <div className="card">
            <div className="card-body">
              {kieli === Kieli.Suomi ? sana.fi : sana.fr}
            </div>
          </div>
        </div>
      </div>
    )}

    {!peliLoppu && näytäSana && (
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
          <div className="card">
            <div className="card-body">
              {kieli === Kieli.Suomi ? sana.fi : sana.fr}
            </div>
          </div>
        </div>
        <div className="col col-lg-2">
          <div className="card">
            <div className="card-body">
              {kieli === Kieli.Suomi ? sana.fr : sana.fi}
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
