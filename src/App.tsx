import React, { useState } from "react";
import _ from "lodash";
import "./App.css";

enum Kieli {
  Suomi = "Suomi",
  Ranska = "Ranska",
}

enum Kappale {
  EnClasse = "En classe",
  OuEstMaGomme = "Où est ma gonne?",
}

type Sana = { fi: string; fr: string };

const kappaleet: Record<Kappale, Array<Sana>> = {
  [Kappale.EnClasse]: [
    { fi: "koulussa", fr: "à l'école" },
    { fi: "koulu", fr: "une école" },
    { fi: "koulutarvikkeet", fr: "le matèriel scolaire" },
    { fi: "luokassa", fr: "dans la trousse" },
    { fi: "luokassa", fr: "en classe" },
    { fi: "luokka", fr: "une classe" },
    { fi: "kertaa", fr: "fois" },
    { fi: "on yhteensä", fr: "font" },
    { fi: "helppo", fr: "facile" },
    { fi: "todella hyvä", fr: "très bien" },
    { fi: "lapsi", fr: "un enfant" },
    { fi: "un cours de math", fr: "matematiikan tunti" },
    { fi: "mutta", fr: "mais" },
    { fi: "miksi", fr: "pourquoi" },
    { fi: "pahoillaan", fr: "désolé, désolée" },
    { fi: "ranskan vihko", fr: "un cahier de français" },
    { fi: "oho, hups", fr: "oups" },
    { fi: "antaa lainaksi", fr: "prêter (I)" },
    { fi: "Lainaatko minulle?", fr: "Tu me prêtes?" },
    { fi: "tietysti", fr: "bien sûr" },
    { fi: "ole hyvä (annettaessa)", fr: "voilà" },
    { fi: "kuinka paljon", fr: "combien de" },
    { fi: "en tiedä", fr: "je ne sais pas" },
    { fi: "viisitoista", fr: "quinze" },
    { fi: "lasketaan ne", fr: "on les compte" },
  ],
  [Kappale.OuEstMaGomme]: [
    { fi: "värit", fr: "les couleurs" },
    { fi: "Minkä värinen se on?", fr: "C'est de quelle couleur?" },
    { fi: "eläintaulu", fr: "chanson des animaux" },
    { fi: "Missä on minun kumini?", fr: "Où est ma gomme?" },
    { fi: "missä", fr: "où" },
    { fi: "minun", fr: "mon, ma" },
    { fi: "anteeksi", fr: "pardon" },
    { fi: "Ei haittaa", fr: "Ce n'est pas grave." },
    { fi: "sinun", fr: "ton, ta" },
    { fi: "Se on totta", fr: "C'est vrai." },
    {
      fi: "Minkä värinen sinun kuulakärkikynäsi on?",
      fr: "Ton stylo est de quelle couleur?",
    },
    { fi: "myös", fr: "aussi" },
    { fi: "nyt", fr: "maintenant" },
    { fi: "suloinen", fr: "mignon, mignonne" },
    { fi: "tuolla on", fr: "il y a" },
    { fi: "paljon", fr: "beaucoup de" },
    { fi: "ilmapallo, pallo", fr: "un ballon" },
    { fi: "Mennäänkö sinne?", fr: "On y va?" },
    { fi: "nopeasti", fr: "vite" },
  ],
};

function App() {
  const [kappale, asetaKappale] = useState<Kappale>(Kappale.EnClasse);
  const [kaikkiSanat, asetaKaikkiSanat] = useState<Array<Sana>>([]);
  const [sanat, asetaSanat] = useState<Array<Sana>>([]);
  const [sana, asetaSana] = useState<Sana>(undefined as unknown as Sana);
  const [tiedetyt, asetaTiedetyt] = useState<Array<Sana>>([]);
  const [eiTiedetyt, asetaEiTiedetyt] = useState<Array<Sana>>([]);
  const [peliLoppu, asetaPeliLoppu] = useState<boolean>(true);
  const [näytäSana, asetaNäytäSana] = useState<boolean>(false);
  const [kieli, asetaKieli] = useState<Kieli>(Kieli.Suomi);

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
    const uudetSanat = _.shuffle(kappaleet[kappale]);
    asetaSanat(uudetSanat);
    asetaKaikkiSanat(uudetSanat);
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
    asetaKaikkiSanat(eiTiedetyt);
    asetaSana(eiTiedetyt[0]);
    asetaTiedetyt([]);
    asetaEiTiedetyt([]);
    asetaNäytäSana(false);
    asetaPeliLoppu(false);
  };

  const vaihdaKieltä = (event: React.ChangeEvent<HTMLSelectElement>) => {
    asetaKieli(event.target.value as Kieli);
    aloitaPeliAlusta();
  };

  const vaihdaKappaletta = (event: React.ChangeEvent<HTMLSelectElement>) => {
    asetaKappale(event.target.value as Kappale);
    aloitaPeliAlusta();
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <h1>Sanakoe</h1>
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          Sanojen kyselykieli:
          <select className="form-select" onChange={vaihdaKieltä} value={kieli}>
            <option value={Kieli.Suomi}>Kysy suomeksi</option>
            <option value={Kieli.Ranska}>Kysy ranskaksi</option>
          </select>
        </div>
      </div>

      <br />

      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          Kappale:
          <select
            className="form-select"
            onChange={vaihdaKappaletta}
            value={kappale}
          >
            <option value={Kappale.EnClasse}>{Kappale.EnClasse}</option>
            <option value={Kappale.OuEstMaGomme}>{Kappale.OuEstMaGomme}</option>
          </select>
        </div>
      </div>

      <br />

      {!peliLoppu && (
        <div className="row justify-content-md-center">
          <div className="col col-lg-4">
            Sana {kaikkiSanat.length - sanat.length + 1}/{kaikkiSanat.length}
          </div>
        </div>
      )}

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
        </div>
      )}

      <br />

      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <p>Oikein: {tiedetyt.length}</p>
          <p>Väärin: {eiTiedetyt.length}</p>
        </div>
      </div>

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
        </div>
      )}
    </div>
  );
}

export default App;
