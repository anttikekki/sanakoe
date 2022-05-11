import { Sana } from "./types";

export enum Cadeau_1 {
  Kappale_2 = "2. Bonjour",
  Kappale_3 = "3. Tu as quel âge ?",
  Kappale_3a = "3. Tu as quel âge ? - Les nombres",
  Kappale_4 = "4. Tu as des frères et sœurs ?",
  Kappale_4a = "4. Tu as des frères et sœurs ? - La famille",
  Kappale_5 = "5. Tu as un chien ?",
  Kappale_5a = "5. Tu as un chien ? - Les animaux",
  Kappale_6 = "6. À l’école",
  Kappale_6a = "6. À l’école - Le matériel scolaire",
  Kappale_7 = "7. Les couleurs",
  Kappale_7a = "7. Les couleurs - C'est de quelle couleurs ?",
  Kappale_8 = "8. Qu'est-ce que fais",
  Kappale_8a = "8. Qu'est-ce que fais - Les loisirs",
  Kappale_9_1 = "9. C’est la fête - Joyeux Noël !",
}

export enum Cadeau_2 {
  Kappale_1 = "1. Vous êtes prêts ?",
  Kappale_2 = "2. Tu as faim ?",
  Kappale_2a = "2. Tu as faim ? - Des fruits et des baies",
  Kappale_3 = "3. À table",
  Kappale_3a = "3. À table - Bon appétit !",
  Kappale_4 = "4. Les heures",
  Kappale_5 = "5. Les jours de la semaine",
  Kappale_5a = "5. Les jours de la semaine - Des loisirs"
}

export type Kappale = Cadeau_1 | Cadeau_2;

export const kappaleet: Record<Kappale, Array<Sana>> = {
  [Cadeau_1.Kappale_2]: [
    { fr: "bonjour", fi: "huomenta, hyvää päivää" },
    { fr: "les salutations", fi: "tervehdykset" },
    { fr: "salut", fi: "hei, moi" },
    { fr: "Ça va ?", fi: "Mitä kuuluu?" },
    { fr: "Ça va.", fi: "Kuuluu hyvää." },
    { fr: "Comment allez-vous?", fi: "Kuinka voitte?" },
    { fr: "madame", fi: "rouva" },
    { fr: "monsieur", fi: "herra" },
    { fr: "À plus tard !", fi: "Nähdään sitten (myöhemmin)!" },
    { fr: "À bientôt !", fi: "Nähdää pian!" },
    { fr: "Au revoir", fi: "näkemiin" },
    { fr: "la rentrée", fi: "koulun alku" },
    { fr: "je m'appelle", fi: "minun nimeni on" },
    { fr: "Et toi ?", fi: "Entä sinä?" },
    { fr: "moi", fi: "minä (itseä korostava sana)" },
    { fr: "je", fi: "minä" },
    { fr: "je suis", fi: "minä olen" },
    { fr: "Tu t'appelles comment ?", fi: "Mikä sinun nimesi on?" },
    { fr: "tu", fi: "sinä" },
    { fr: "tu es", fi: "sinä olet" },
    { fr: "voici", fi: "tässä on" },
    { fr: "la maitresse", fi: "opettaja" },
    { fr: "les enfants", fi: "lapset" },
    { fr: "Comment ça va ?", fi: "Mitä kuuluu?" },
    { fr: "bien", fi: "hyvää" },
    { fr: "merci", fi: "kiitos" },
    { fr: "la récré", fi: "välitunti" },
  ],
  [Cadeau_1.Kappale_3]: [
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
  [Cadeau_1.Kappale_3a]: [
    { fi: "yksi", fr: "un" },
    { fi: "kaksi", fr: "deux" },
    { fi: "kolme", fr: "trois" },
    { fi: "neljä", fr: "quetre" },
    { fi: "viisi", fr: "cinq" },
    { fi: "kuusi", fr: "six" },
    { fi: "setsemän", fr: "sept" },
    { fi: "kahdeksan", fr: "huit" },
    { fi: "yhdeksän", fr: "neuf" },
    { fi: "kymmenen", fr: "dix" },
    { fi: "yksitoista", fr: "onze" },
    { fi: "kaksitoista", fr: "douze" },
    { fi: "kolmetoista", fr: "treize" },
    { fi: "neljätoista", fr: "quatorze" },
    { fi: "viisitoista", fr: "quinze" },
    { fi: "kuusitoista", fr: "seize" },
    { fi: "setsemäntoista", fr: "dix-sept" },
    { fi: "kahdeksantoista", fr: "dix-huit" },
    { fi: "yhdeksäntoista", fr: "dix-neuf" },
    { fi: "kaksikymmentä", fr: "vingt" },
  ],
  [Cadeau_1.Kappale_4]: [
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
  [Cadeau_1.Kappale_4a]: [
    { fi: "äiti", fr: "une mère" },
    { fi: "isä", fr: "un père" },
    { fi: "sisko", fr: "une sœur" },
    { fi: "veli", fr: "un frère" },
    { fi: "isoäiti", fr: "une grand-mère" },
    { fi: "isosiä", fr: "un grand-père" },
    { fi: "vauva", fr: "un bébé" },
  ],
  [Cadeau_1.Kappale_5]: [
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
  [Cadeau_1.Kappale_5a]: [
    { fi: "kissa", fr: "un chat" },
    { fi: "koira", fr: "un chien" },
    { fi: "jänis", fr: "un lapis" },
    { fi: "kala", fr: "un poisson" },
    { fi: "hevonen", fr: "un cheval" },
    { fi: "lammas", fr: "un mouton" },
    { fi: "lehmä", fr: "une vache" },
    { fi: "kilpikonna", fr: "une tortue" },
    { fi: "kana", fr: "une poule" },
    { fi: "perhonen", fr: "un papillon" },
    { fi: "hamsteri", fr: "un hamster" },
  ],
  [Cadeau_1.Kappale_6]: [
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
    { fi: "matematiikan tunti", fr: "un cours de math" },
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
  [Cadeau_1.Kappale_6a]: [
    { fi: "kirja", fr: "un livre" },
    { fi: "vihko", fr: "un cahier" },
    { fi: "lyijykynä", fr: "un crayon" },
    { fi: "kuulakärkikynä", fr: "un stylo" },
    { fi: "pyyhekumi", fr: "une gomme" },
    { fi: "penaali", fr: "une trousse" },
    { fi: "terotin", fr: "un taille-crayon" },
    { fi: "viivotin", fr: "une règle" },
    { fi: "tussi", fr: "un feutre" },
    { fi: "liima", fr: "une colle" },
    { fi: "sakset", fr: "les ciseaux" },
  ],
  [Cadeau_1.Kappale_7]: [
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
  [Cadeau_1.Kappale_7a]: [
    { fr: "bleu, bleue", fi: "sininen" },
    { fr: "blanc, blanche", fi: "valkoinen" },
    { fr: "rouge", fi: "punainen" },
    { fr: "vert, verte", fi: "vihreä" },
    { fr: "noir, noire", fi: "musta" },
    { fr: "jaune", fi: "keltainen" },
    { fr: "marron", fi: "punaruskea" },
    { fr: "orange", fi: "oranssi" },
    { fr: "rose", fi: "vaaleanpunainen" },
    { fr: "gris, grise", fi: "harmaa" },
    { fr: "brun, brune", fi: "ruskea" },
    { fr: "violet, violette", fi: "violetti" },
  ],
  [Cadeau_1.Kappale_8]: [
    { fr: "le temps libre", fi: "vapaa-aika" },
    { fr: "les loisirs", fi: "harrastukset" },
    { fr: "Action!", fi: "Toimintaa!" },
    { fr: "Qu'est-ce que tu fais?", fi: "Mitä sinä teet?" },
    { fr: "dans un park", fi: "puistossa" },
    { fr: "un parc", fi: "puisto" },
    { fr: "un e tablette", fi: "tablettitietokone" },
    { fr: "chouette", fi: "kiva" },
    { fr: "gagner", fi: "voittaa" },
    { fr: "trop", fi: "liian,liikaa" },
    { fr: "difficile", fi: "vaikea" },
    { fr: "avec moi", fi: "kanssani" },
    { fr: "fatigué, fatiguée", fi: "väynyt" },
    { fr: "là-bas", fi: "tuolla" },
    { fr: "jouer au rugby", fi: "pelata rugbyä" },
    { fr: "dans une équipe", fi: "joukkueessa" },
    { fr: "une équipe", fi: "joukkue" },
    { fr: "cool", fi: "tosi hieno" },
    { fr: "bien", fi: "hyvin" },
    { fr: "pas mal", fi: "ei hullummin" },
    { fr: "mal", fi: "huonosti" },
    { fr: "rigoler", fi: "hassutella, pitää hauskaa" },
    { fr: "faire", fi: "tehdä" },
    { fr: "je fais", fi: "minä teen" },
    { fr: "tu fais ", fi: "sinä teet" },
    { fr: "il fais", fi: "hän tekee" },
    { fr: "elle fais", fi: "hän tekee" },
    { fr: "une chanson", fi: "laulu" },
  ],
  [Cadeau_1.Kappale_8a]: [
    { fr: "dancer (I)", fi: "tanssia" },
    { fr: "nager (I)", fi: "uida" },
    { fr: "jouer (I)", fi: "pelata" },
    { fr: "dessiner (I)", fi: "piirtää" },
    { fr: "chanter (I)", fi: "laulaa" },
    { fr: "marcher (I)", fi: "kävellä" },
    { fr: "manger (I)", fi: "syödä" },
    { fr: "aimer (I)", fi: "rakastaa" },
    { fr: "regarder (I)", fi: "katsoa" },
    { fr: "écouter (I) dela musique", fi: "kuunnella musiikkia" },
    { fr: "sauter (I) à la corde", fi: "hyppiä hyppynarua" },
  ],
  [Cadeau_1.Kappale_9_1]: [
    { fr: "Joyeux Noël !", fi: "Iloista joulua!" },
    { fr: "Noël", fi: "joulu" },
    { fr: "le sapin", fi: "kuusi" },
    { fr: "la guirlande", fi: "koristenauha" },
    { fr: "la boule", fi: "(joulu)pallo" },
    { fr: "l'étoile", fi: "tähti" },
    { fr: "l'ange", fi: "enkeli" },
    { fr: "la bougie", fi: "kynttilä" },
    { fr: "la crèche de Noël", fi: "jouluseimi" },
    { fr: "le lutin", fi: "tonttu" },
    { fr: "le renne", fi: "poro" },
    { fr: "le père Noël", fi: "joulupukki" },
    { fr: "le traineau", fi: "reki" },
    { fr: "la fête de Noël", fi: "joulujuhla" },
    { fr: "beau, belle", fi: "kaunis" },
    { fr: "on aime", fi: "tykätään" },
    { fr: "la nouvelle année", fi: "uusi vuosi" },
    { fr: "la buche de Noël", fi: "jouluhalko" },
    { fr: "sur le sapin", fi: "kuuseen, kuusessa" },
  ],
  [Cadeau_2.Kappale_1]: [
    { fr: "vous êtes", fi: "te olette" },
    { fr: "prêt, prête", fi: "valmis" },
    { fr: "C'est moi !", fi: "Tässäpä minä!" },
    { fr: "mon, ma", fi: "minun" },
    { fr: "un âge", fi: "ikä" },
    { fr: "un professeur", fi: "opettaja (mies)" },
    { fr: "une professeure", fi: "opettaja (nainen)" },
    { fr: "la rentrèe", fi: "koulun alku" },
    { fr: "un copain, une copine", fi: "kaveri" },
    { fr: "encore", fi: "vielä" },
    { fr: "les autres", fi: "muut" },
    { fr: "un départ", fi: "lähtö" },
    { fr: "un crayon", fi: "lyijykynä" },
    { fr: "danser", fi: "tanssia" },
    { fr: "vingt", fi: "kaksikymmentä" },
    { fr: "une étoile", fi: "tähti" },
    { fr: "dessiner (I)", fi: "piirtää" },
    { fr: "il", fi: "hän (pojasta)" },
    { fr: "un chat", fi: "kissa" },
    { fr: "douze", fi: "kaksitoista" },
    { fr: "un sac à dos", fi: "reppu" },
    { fr: "un lézard", fi: "lisko" },
    { fr: "manger", fi: "syödä" },
    { fr: "dix-huit", fi: "kahdeksantoista" },
    { fr: "un chien", fi: "koira" },
    { fr: "seize", fi: "kuusitoista" },
    { fr: "elle", fi: "hän (tytöstä)" },
    { fr: "une gomme", fi: "kumi" },
    { fr: "une arrivée", fi: "maali" },
  ],
  [Cadeau_2.Kappale_2]: [
    { fr: "un fruit", fi: "hedelmä" },
    { fr: "une baie", fi: "marja" },
    { fr: "pourquoi pas", fi: "miksipä ei" },
    { fr: "pas maintenant", fi: "ei nyt" },
    { fr: "dans une pâtisserie", fi: "leipomossa" },
    { fr: "une pâtisserie", fi: "leipomo, leivonnainen" },
    { fr: "avoir faim", fi: "olla nälkä" },
    { fr: "qu'est-ce que", fi: "mikä, mitä" },
    { fr: "acheter (I)", fi: "ostaa" },
    { fr: "moi aussi", fi: "minä myös, minulla myös" },
    { fr: "je voudrais", fi: "haluaisin" },
    { fr: "un éclair", fi: "éclair-leivos, salama" },
    { fr: "bien sûr", fi: "totta kai" },
    { fr: "avoir soif", fi: "olla jano" },
    { fr: "un jus", fi: "mehu" },
    { fr: "un jus de fruit", fi: "hedelmämehu" },
    { fr: "une tartelette", fi: "pieni torttu" },
    { fr: "une tartelette aux citrons", fi: "pieni sitruunatorttu" },
    { fr: "s'il vous plait", fi: "kiitos (pyydettäessä)" },
    { fr: "avec ceci", fi: "tämän kanssa" },
    { fr: "pour moi", fi: "minulle" },
    { fr: "un euro", fi: "euro" },
  ],
  [Cadeau_2.Kappale_2a]: [
    { fr: "une pomme", fi: "omena" },
    { fr: "une banane", fi: "banaani" },
    { fr: "une mure", fi: "karhunvatukka" },
    { fr: "une fraise", fi: "mansikka" },
    { fr: "une cerise", fi: "kirsikka" },
    { fr: "une poire", fi: "päärynä" },
    { fr: "une myrtille", fi: "mustikka" },
    { fr: "une ananas", fi: "ananas" },
    { fr: "un kiwi", fi: "kiivi" },
    { fr: "une orange", fi: "appelssiini" },
    { fr: "une franboise", fi: "vadelma" },
    { fr: "une pêche", fi: "persikka" },
  ],
  [Cadeau_2.Kappale_3]: [
    { fr: "à table", fi: "pöytään, syömään" },
    { fr: "Bon appétit !", fi: "Hyvää ruokahalua!" },
    { fr: "aimer (I)", fi: "tykätä, rakastaa" },
    { fr: "un diner", fi: "illallinen" },
    { fr: "chez", fi: "luona, luokse" },
    { fr: "la famille de Théo", fi: "Théon perhe" },
    { fr: "diner (I)", fi: "syödä illallista" },
    { fr: "à la terrasse", fi: "terassilla" },
    { fr: "une terrasse", fi: "terassi" },
    { fr: "un voisin, une voisine", fi: "naapuri" },
    { fr: "tout le monde", fi: "kaikki" },
    { fr: "arriver (I)", fi: "saapua" },
    { fr: "viens", fi: "tule" },
    { fr: "une entrée", fi: "alkupala" },
    {
      fr: "des œufs mimosa",
      fi: "kanamunanpuolikkaat tonnikalalla ja persiljalla",
    },
    { fr: "un moment", fi: "hetki" },
    { fr: "plus tard", fi: "myöhemmin" },
    { fr: "ensuite", fi: "sitten" },
    { fr: "une quiche", fi: "suolainen piiras" },
    { fr: "ça sent bon", fi: "se tuoksuu hyvälle" },
    { fr: "faire* la cuisine", fi: "laittaa ruokaa" },
    { fr: "encore", fi: "vielä" },
    { fr: "un dessert", fi: "jälkiruoka" },
    { fr: "un peu plus tard", fi: "vähän myöhemmin" },
    { fr: "Je n'aime pas trop", fi: "En pidä paljoa." },
    { fr: "si", fi: "kyllä(päs)" },
    { fr: "adorer (I)", fi: "tykätä tosi paljon" },
    { fr: "gourmand, gourmande", fi: "herkkusuu, herkuttelija" },
  ],
  [Cadeau_2.Kappale_3a]: [
    { fr: "un poisson", fi: "kala" },
    { fr: "un poulet", fi: "kana" },
    { fr: "un steak", fi: "pihvi" },
    { fr: "des frites", fi: "ranskalaiset perunat" },
    { fr: "des pommes de terre", fi: "peruna" },
    { fr: "une galette", fi: "piirakka" },
    { fr: "une pizza", fi: "pizza" },
    { fr: "des pâtes", fi: "pasta" },
    { fr: "une salade", fi: "salaatti" },
    { fr: "un fromage", fi: "juusto" },
    { fr: "un yaourt", fi: "jugurtti" },
  ],
  [Cadeau_2.Kappale_4]: [
    { fr: "Il est quelle heure?", fi: "Paljonko kello on?" },
    { fr: "une journée du sport", fi: "urheilupäivä" },
    { fr: "Cést...", fi: "On..." },
    { fr: "vendredi", fi: "perjantai" },
    { fr: "un matin", fi: "aamu" },
    { fr: "une cour", fi: "piha" },
    { fr: "ils attendent", fi: "he odottavat" },
    { fr: "une activité", fi: "puuha, toiminta, tehtvä" },
    { fr: "commencer", fi: "alkaa, aloittaa" },
    { fr: "à neuf heures", fi: "klo 9" },
    { fr: "comme activité", fi: "puuhana, tehtävänä" },
    { fr: "par exemple", fi: "esimerkiksi" },
    { fr: "le basket", fi: "koripallo" },
    { fr: "le tennis", fi: "tennis" },
    { fr: "Ce nést pas mal", fi: "Ei hassumpaa" },
    { fr: "à quelle heure?", fi: "mihin aikaan?" },
    { fr: "continuer", fi: "jatkaa" },
    { fr: "Quelle journée sympa!", fi: "Ompa mahtava päivä!" },
    { fr: "un sport", fi: "urheilu" },
    { fr: "déjà", fi: "jo" },
    { fr: "on va", fi: "mennään" },
    { fr: "une pisine", fi: "uimahalli" },
    { fr: "un plongeon", fi: "uimahyppy" },
    { fr: "faire* des plongeons", fi: "tehdä uimahyppyjä" },
  ],
  [Cadeau_2.Kappale_5]: [
    { fr: "les jours de la semaine", fi: "viikonpäivät" },
    { fr: "un jour", fi: "päivä" },
    { fr: "une semaine", fi: "viikko" },
    { fr: "cette semaine", fi: "tällä viikolla" },
    { fr: "chez", fi: "luona" },
    { fr: "leur", fi: "heidän" },
    { fr: "un devoir", fi: "läksy" },
    { fr: "organiser (I)", fi: "järjestellä" },
    { fr: "une semaine de vacances", fi: "lomaviikko" },
    { fr: "un dessin", fi: "piirrustus" },
    { fr: "français, française", fi: "ranskalainen" },
    { fr: "lundi", fi: "maaanatai" },
    { fr: "mardi", fi: "tiistai" },
    { fr: "mercredi", fi: "keskiviikko" },
    { fr: "jeudi", fi: "torstai" },
    { fr: "vendredi", fi: "perjantai" },
    { fr: "samedi", fi: "lauantai" },
    { fr: "dimanche", fi: "sunnuntai" },
    { fr: "Il fait beau.", fi: "On kaunis ilma." },
    { fr: "Il neige", fi: "Sataa lunta." },
  ],
  [Cadeau_2.Kappale_5a]: [
    { fr: "faire* du parkour", fi: "parkour" },
    { fr: "faire* de la voile", fi: "purjehtia" },
    { fr: "faire* du ski", fi: "lasketella" },
    { fr: "jouer (I) au rugby", fi: "pelata rugbyä" },
    { fr: "jouer (I) au basket", fi: "pelata koripalloa" },
    { fr: "faire* du judo", fi: "judo" },
    { fr: "jouer (I) au tennis", fi: "pelata tennistä" },
    { fr: "danser (I)", fi: "tanssia" },
    { fr: "jouer (I) du piano", fi: "soittaa pianoa" },
    { fr: "faire* voler un cerf-volant", fi: "lennättää leijaa" },
    { fr: "faire* du monocycle", fi: "ajaa yksipyöraisellä" },
  ]
};
