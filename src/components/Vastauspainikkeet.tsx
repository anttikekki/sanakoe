import React from "react";

export const Vastauspainikkeet: React.FunctionComponent<{
  peliLoppu: boolean;
  näytäSana: boolean;
  tiedanPainike: () => void;
  enTiedanPainike: () => void;
  siirrySeuraavaanSanaan: () => void;
}> = ({
  peliLoppu,
  näytäSana,
  tiedanPainike,
  enTiedanPainike,
  siirrySeuraavaanSanaan,
}) => (
  <>
    {!peliLoppu && !näytäSana && (
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
          <button
            type="button"
            className="btn btn-outline-success btn-lg"
            onClick={() => tiedanPainike()}
          >
            Tiedän
          </button>
        </div>
        <div className="col col-lg-2">
          <button
            type="button"
            className="btn btn-outline-danger btn-lg"
            onClick={() => enTiedanPainike()}
          >
            En tiedä
          </button>
        </div>
      </div>
    )}

    {!peliLoppu && näytäSana && (
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => siirrySeuraavaanSanaan()}
          >
            Seuraava sana
          </button>
        </div>
      </div>
    )}
  </>
);
