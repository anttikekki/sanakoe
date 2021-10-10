import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import "./App.css";

enum Kieli {
  Suomi = "Suomi",
  Ranska = "Ranska",
}

enum Kappale {
  Kappale_3 = "3. Tu as quel âge ?",
  Kappale_4 = "4. Tu as des frères et sœurs ?",
  Kappale_5 = "5. Tu as un chien ?",
  Kappale_6 = "6. À l’école",
  Kappale_7 = "7. Les couleurs",
}

type Sana = { fi: string; fr: string };

const kappaleet: Record<Kappale, Array<Sana>> = {
  [Kappale.Kappale_3]: [
    { fi: "Kuinka vanha olet?", fr: "Tu as quel âge?" },
    { fi: "numerot", fr: "les nombres" },
    { fi: "Hyvää syntymäpäivää?", fr: "Bon anniversaire!" },
    { fi: "minun syntymäpäiväni", fr: "mos anniversaire" },
    { fi: "ole hyvä", fr: "tiens" },
    { fi: "lahja", fr: "un cardeau" },
    { fi: "kortti", fr: "une carte" },
    { fi: "kiitos", fr: "merci" },
    { fi: "mutta", fr: "mais" },
    { fi: "Olen 9-vuotias", fr: "J'ai neuf ans." },
    { fi: "vuosi", fr: "un an" },
    { fi: "oi, oi, ohoh", fr: "oh là là" },
    { fi: "kynttilä", fr: "une bougie" },
    { fi: "Katso!", fr: "Regarde!" },
    { fi: "kakku", fr: "un gâteau" },
    { fi: "nam", fr: "miam" },
    { fi: "Maistetaanko?", fr: "On goute?" },
    { fi: "omistaa; olla jonkun ikäinen", fr: "avoir" },
    { fi: "minulla on", fr: "j'ai" },
    { fi: "sinulla on", fr: "tu as" },
    { fi: "hänellä on (pojasta puhuttaessa)", fr: "il a" },
    { fi: "hänellä on (tytöstä puhuttaessa)", fr: "elle a" },
  ],
  [Kappale.Kappale_4]: [
    { fi: "Onko sinulla sisaruksia?", fr: "Tu as des frères et sœurs?" },
    { fi: "minun perheeni", fr: "ma famille" },
    { fi: "perhevalokuvia", fr: "photos de famille" },
    { fi: "perhe", fr: "la famille" },
    { fi: "pikkusisko", fr: "un petite sœurs" },
    { fi: "pikkuveli", fr: "un petit frère" },
    { fi: "papukaija", fr: "un parroquet" },
    { fi: "lisko", fr: "un lézard" },
    { fi: "(poika) lapsi", fr: "fils" },
    { fi: "ainoa", fr: "unique" },
    { fi: "vanhempi sisarus", fr: "ainé" },
    { fi: "hauska", fr: "drôle" },
    { fi: "olla", fr: "être" },
    { fi: "minä olen", fr: "je suis" },
    { fi: "sinä olet", fr: "tu es" },
    { fi: "hän on (poika)", fr: "il est" },
    { fi: "hän on (tyttö)", fr: "tu es" },
  ],
  [Kappale.Kappale_5]: [
    { fi: "Onko sinulla koira?", fr: "Tu as un chien?" },
    { fi: "eläimet", fr: "les animaux" },
    { fi: "minun eläimeni", fr: "mes animaux" },
    { fi: "piente lampaat", fr: "les petits moutons" },
    { fi: "pieni", fr: "petit, petite" },
    { fi: "Ei", fr: "Non." },
    { fi: "Minulla ei ole...", fr: "Je n'ai pas de..." },
    { fi: "Katsokaa!", fr: "Regardez!" },
    { fi: "lampaita", fr: "des moutons" },
    { fi: "ja", fr: "et" },
    { fi: "lehmiä", fr: "des vaches" },
    { fi: "Joo. Kyllä.", fr: "Oui!" },
    { fi: "koiria", fr: "des chiens" },
    { fi: "kissoja", fr: "des chats" },
    { fi: "Oi!", fr: "Oh!" },
    { fi: "Ne ovat niin söpöjä.", fr: "Ils sont tellements jolis." },
    { fi: "ne ovat", fr: "ils sont" },
    { fi: "niin", fr: "tellement" },
    { fi: "sievä, söpö", fr: "joli, jolie" },
    { fi: "Hän on nimeltään", fr: "Il s'appelle" },
  ],
  [Kappale.Kappale_6]: [
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
  [Kappale.Kappale_7]: [
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
  const [kappale, asetaKappale] = useState<Kappale>(Kappale.Kappale_5);
  const [kaikkiSanat, asetaKaikkiSanat] = useState<Array<Sana>>([]);
  const [sanat, asetaSanat] = useState<Array<Sana>>([]);
  const [sana, asetaSana] = useState<Sana>(undefined as unknown as Sana);
  const [tiedetyt, asetaTiedetyt] = useState<Array<Sana>>([]);
  const [eiTiedetyt, asetaEiTiedetyt] = useState<Array<Sana>>([]);
  const [peliLoppu, asetaPeliLoppu] = useState<boolean>(true);
  const [näytäSana, asetaNäytäSana] = useState<boolean>(false);
  const [kieli, asetaKieli] = useState<Kieli>(Kieli.Suomi);

  const siirrySeuraavaanSanaan = useCallback(() => {
    const jaljellaOlevatSanat = sanat.filter((s) => s.fi !== sana.fi);
    if (jaljellaOlevatSanat.length === 0) {
      asetaPeliLoppu(true);
      return;
    }

    asetaSanat(jaljellaOlevatSanat);
    asetaSana(jaljellaOlevatSanat[0]);
    asetaNäytäSana(false);
  }, [sanat, sana]);

  const tiedanPainike = useCallback(() => {
    if (peliLoppu) {
      return;
    }
    asetaTiedetyt([...tiedetyt, sana]);
    asetaNäytäSana(true);
  }, [peliLoppu, tiedetyt, sana]);

  const enTiedanPainike = useCallback(() => {
    if (peliLoppu) {
      return;
    }
    asetaEiTiedetyt([...eiTiedetyt, sana]);
    asetaNäytäSana(true);
  }, [peliLoppu, eiTiedetyt, sana]);

  const aloitaPeliAlusta = useCallback(() => {
    const uudetSanat = _.shuffle(kappaleet[kappale]);
    asetaSanat(uudetSanat);
    asetaKaikkiSanat(uudetSanat);
    asetaSana(uudetSanat[0]);
    asetaTiedetyt([]);
    asetaEiTiedetyt([]);
    asetaNäytäSana(false);
    asetaPeliLoppu(false);
  }, [kappale]);

  const kertaaVäärinMenneet = useCallback(() => {
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
  }, [eiTiedetyt, aloitaPeliAlusta]);

  const vaihdaKieltä = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      asetaKieli(event.target.value as Kieli);
    },
    [asetaKieli]
  );

  const vaihdaKappaletta = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      asetaKappale(event.target.value as Kappale);
    },
    [asetaKappale]
  );

  useEffect(() => {
    aloitaPeliAlusta();
  }, [kieli, kappale, aloitaPeliAlusta]);

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <h1>Sanakoe</h1>
          <p>
            Opetushallituksen{" "}
            <a href="https://verkkokauppa.oph.fi/sivu/tuote/cadeau-1/24487792">
              Caudeau 1
            </a>{" "}
            -kirjan kappaleiden sanojen epävirallinen sanakoe.
          </p>
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
            <option value={Kappale.Kappale_3}>{Kappale.Kappale_3}</option>
            <option value={Kappale.Kappale_4}>{Kappale.Kappale_4}</option>
            <option value={Kappale.Kappale_5}>{Kappale.Kappale_5}</option>
            <option value={Kappale.Kappale_6}>{Kappale.Kappale_6}</option>
            <option value={Kappale.Kappale_7}>{Kappale.Kappale_7}</option>
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
