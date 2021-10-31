import React from "react";
import { Kieli } from "../types";

export const KielenValinta: React.FunctionComponent<{
  kieli: Kieli;
  vaihdaKieltä: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ kieli, vaihdaKieltä }) => (
  <div className="row justify-content-md-center">
    <div className="col col-lg-4">
      Sanojen kyselykieli:
      <select className="form-select" onChange={vaihdaKieltä} value={kieli}>
        <option value={Kieli.Suomi}>Kysy suomeksi</option>
        <option value={Kieli.Ranska}>Kysy ranskaksi</option>
      </select>
    </div>
  </div>
);
