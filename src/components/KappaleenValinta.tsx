import React from "react";
import { Kappale, Cadeau_1, Cadeau_2 } from "../sanasto";

export const KappaleenValinta: React.FunctionComponent<{
  kappale: Kappale;
  vaihdaKappaletta: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ kappale, vaihdaKappaletta }) => (
  <div className="row justify-content-md-center">
    <div className="col col-lg-4">
      Kappale:
      <select
        className="form-select"
        onChange={vaihdaKappaletta}
        value={kappale}
      >
        <optgroup label="Caudeau 1">
          {Object.values(Cadeau_1).map((kappale) => (
            <option key={kappale} value={kappale}>
              {kappale}
            </option>
          ))}
        </optgroup>
        <optgroup label="Caudeau 2">
          {Object.values(Cadeau_2).map((kappale) => (
            <option key={kappale} value={kappale}>
              {kappale}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  </div>
);
