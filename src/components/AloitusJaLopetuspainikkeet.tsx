import React from "react";

export const AloitusJaLopetuspainikkeet: React.FunctionComponent<{
  peliLoppu: boolean;
  väärinMenneidenSanojenLukumäärä: number;
  aloitaPeliAlusta: () => void;
  kertaaVäärinMenneet: () => void;
}> = ({
  peliLoppu,
  aloitaPeliAlusta,
  kertaaVäärinMenneet,
  väärinMenneidenSanojenLukumäärä,
}) => (
  <>
    {!peliLoppu && (
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <button
            type="button"
            className="btn btn-warning btn-lg"
            onClick={() => aloitaPeliAlusta()}
          >
            Aloita alusta
          </button>
        </div>
      </div>
    )}

    <br />

    {peliLoppu && (
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => aloitaPeliAlusta()}
          >
            Aloita alusta
          </button>
        </div>
        {väärinMenneidenSanojenLukumäärä > 0 && (
          <div className="col col-lg-2">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => kertaaVäärinMenneet()}
            >
              Kertaa väärin menneet
            </button>
          </div>
        )}
      </div>
    )}
  </>
);
