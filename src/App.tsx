import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { Kappale, kappaleet } from "./sanasto";
import { Kieli, Sana } from "./types";
import { KielenValinta } from "./components/KielenValinta";
import { KappaleenValinta } from "./components/KappaleenValinta";
import { Otsikko } from "./components/Otsikko";
import { AloitusJaLopetuspainikkeet } from "./components/AloitusJaLopetuspainikkeet";
import { Vastauspainikkeet } from "./components/Vastauspainikkeet";
import { KysyttäväSana } from "./components/KysyttäväSana";
import { Pistetilanne } from "./components/Pistetilanne";
import { SanojaJäljellä } from "./components/SanojaJäljellä";

function App() {
  const [kappale, asetaKappale] = useState<Kappale>(
    Object.values(Kappale)[Object.values(Kappale).length - 1]
  );
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
      <Otsikko />
      <KielenValinta kieli={kieli} vaihdaKieltä={vaihdaKieltä} />
      <br />
      <KappaleenValinta kappale={kappale} vaihdaKappaletta={vaihdaKappaletta} />
      <br />

      <SanojaJäljellä
        peliLoppu={peliLoppu}
        kysyttävänSananJärjestysnumero={kaikkiSanat.length - sanat.length + 1}
        kaikkienSanojenLukumäärä={kaikkiSanat.length}
      />

      <KysyttäväSana
        peliLoppu={peliLoppu}
        näytäSana={näytäSana}
        kieli={kieli}
        sana={sana}
      />

      <br />

      <Vastauspainikkeet
        peliLoppu={peliLoppu}
        näytäSana={näytäSana}
        tiedanPainike={tiedanPainike}
        enTiedanPainike={enTiedanPainike}
        siirrySeuraavaanSanaan={siirrySeuraavaanSanaan}
      />

      <br />

      <Pistetilanne
        tiedettyjenSanojenLukumaara={tiedetyt.length}
        väärinMenneidenSanojenLukumaara={eiTiedetyt.length}
      />

      <AloitusJaLopetuspainikkeet
        peliLoppu={peliLoppu}
        väärinMenneidenSanojenLukumäärä={eiTiedetyt.length}
        aloitaPeliAlusta={aloitaPeliAlusta}
        kertaaVäärinMenneet={kertaaVäärinMenneet}
      />
    </div>
  );
}

export default App;
