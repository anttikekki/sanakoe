import React, { useState } from "react";
import _ from "lodash";
import "./App.css";

type Sana = { fi: string; fr: string };

const kaikkiSanat: Array<Sana> = [
  { fi: "poika", fr: "garçon" },
  { fi: "tyttö", fr: "fille" },
  { fi: "isä", fr: "papa" },
  { fi: "äiti", fr: "mère" },
  { fi: "isoäiti", fr: "grand-mère" },
  { fi: "kissa", fr: "chat" },
  { fi: "koira", fr: "chien" },
  { fi: "hevonen", fr: "cheval" },
  { fi: "kala", fr: "poisson" },
];

function App() {
  const [sanat, asetaSanat] = useState<Array<Sana>>([]);
  const [sana, asetaSana] = useState<Sana>(undefined as unknown as Sana);
  const [tiedetyt, asetaTiedetyt] = useState<Array<Sana>>([]);
  const [eiTiedetyt, asetaEiTiedetyt] = useState<Array<Sana>>([]);
  const [peliLoppu, asetaPeliLoppu] = useState<boolean>(true);
  const [näytäSana, asetaNäytäSana] = useState<boolean>(false);
  const [kysySuomeksi, asetaKysySuomeksi] = useState<boolean>(true);

  const siirrySeuraavaanSanaan = () => {
    const jaljellaOlevatSanat = sanat.filter((s) => s.fi !== sana.fi);
    if (jaljellaOlevatSanat.length === 0) {
      asetaPeliLoppu(true);
      return;
    }

    asetaSanat(jaljellaOlevatSanat);
    asetaSana(jaljellaOlevatSanat[0]);
    asetaNäytäSana(false);
  };

  const tiedanPainike = () => {
    if (peliLoppu) {
      return;
    }
    asetaTiedetyt([...tiedetyt, sana]);
    asetaNäytäSana(true);
  };

  const enTiedanPainike = () => {
    if (peliLoppu) {
      return;
    }
    asetaEiTiedetyt([...eiTiedetyt, sana]);
    asetaNäytäSana(true);
  };

  const aloitaPeliAlusta = () => {
    const uudetSanat = _.shuffle(kaikkiSanat);
    asetaSanat(uudetSanat);
    asetaSana(uudetSanat[0]);
    asetaTiedetyt([]);
    asetaEiTiedetyt([]);
    asetaNäytäSana(false);
    asetaPeliLoppu(false);
  };

  const kertaaVäärinMenneet = () => {
    if (eiTiedetyt.length === 0) {
      aloitaPeliAlusta();
    }
    asetaSanat(eiTiedetyt);
    asetaSana(eiTiedetyt[0]);
    asetaTiedetyt([]);
    asetaEiTiedetyt([]);
    asetaNäytäSana(false);
    asetaPeliLoppu(false);
  };

  const vaihdaKieltä = () => {
    asetaKysySuomeksi(!kysySuomeksi);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <h1>Sanakoe</h1>
        </div>
      </div>

      {!peliLoppu && !näytäSana && (
        <div className="row justify-content-md-center">
          <div className="col col-lg-4">
            <div className="card">
              <div className="card-body">
                {kysySuomeksi ? sana.fi : sana.fr}
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
                {kysySuomeksi ? sana.fi : sana.fr}
              </div>
            </div>
          </div>
          <div className="col col-lg-2">
            <div className="card">
              <div className="card-body">
                {kysySuomeksi ? sana.fr : sana.fi}
              </div>
            </div>
          </div>
        </div>
      )}

      <br />

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
          <div className="col col-lg-2">
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

      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <p>Oikein: {tiedetyt.length}</p>
          <p>Väärin: {eiTiedetyt.length}</p>
        </div>
      </div>

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
          {eiTiedetyt.length > 0 && (
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
          <div className="col col-lg-2">
            <button
              type="button"
              className="btn btn-info btn-lg"
              onClick={() => vaihdaKieltä()}
            >
              {kysySuomeksi ? "Kysy ranskaksi" : "Kysy suomeksi"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
