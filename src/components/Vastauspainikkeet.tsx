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
            className="btn btn-success btn-lg"
            style={{ width: "100%" }}
            onClick={() => tiedanPainike()}
          >
            Tiedän
          </button>
        </div>
        <div className="col col-lg-2">
          <button
            type="button"
            className="btn btn-danger btn-lg"
            style={{ width: "100%" }}
            onClick={() => enTiedanPainike()}
          >
            En tiedä
          </button>
        </div>
      </div>
    )}

    {!peliLoppu && näytäSana && (
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ width: "100%" }}
            onClick={() => siirrySeuraavaanSanaan()}
          >
            Seuraava sana
          </button>
        </div>
      </div>
    )}
  </>
);
