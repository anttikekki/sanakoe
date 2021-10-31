import React from "react";
import { Kappale } from "../sanasto";

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
        {Object.values(Kappale).map((kappale) => (
          <option key={kappale} value={kappale}>
            {kappale}
          </option>
        ))}
      </select>
    </div>
  </div>
);
