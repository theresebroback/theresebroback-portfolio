import digiPant from "../assets/images/digiPant.png";
import frankenStein from "../assets/images/frankenStein.png";
import eggxact from "../assets/images/eggxact.png";
import karcher from "../assets/images/karcherUtleie.png";

const work = {
    eyebrow: "Prosjekter",
    title: "Utvalgte prosjekter",
    intro: "Et utvalg av prosjekter innen design, utvikling og visuelle konsepter.",

    projects: [
        {
            number: "01",
            title: "DigiPant",
            description:
                "To ukers avsluttende prosjekt ved Academy, utviklet i et team på fire studenter. Jeg hadde hovedansvaret for frontend og jobbet med å gjøre designet om til en fungerende digital løsning.",
            tags: ["UX/UI", "Prototype", "React", "Logo"],
            image: digiPant,
            alt: "Digi Rånt mobilapplikasjon",
        },
        {
            number: "02",
            title: "Bokomslag",
            description:
                "Prosjekt fra bachelorgraden min i Medieproduksjon, hvor jeg utviklet designet til et bokomslag. Jeg jobbet med både layout, typografi og visuell utforming i InDesign og Photoshop.",
            tags: ["Grafisk design", "Typografi"],
            image: frankenStein,
            alt: "Bokomslag for Frøken Thomas",
        },
        {
            number: "03",
            title: "Eggxact",
            description:
                "Et eget prosjekt jeg utviklet for å lære React Native på egen hånd. Appen lar deg velge mellom bløtkokt, smilende, medium og hardkokt egg, og setter en nedtelling basert på ønsket koketid.",
            tags: ["UX/UI", "React Native", "Logo", "Prototype"],
            image: eggxact,
            alt: "Eggxact mobilapplikasjon",
        },
        {
            number: "04",
            title: "Utleieportal",
            description:
                "Utvikling av en digital utleieportal for Kärcher Norge i tett samarbeid med utvikler. Jeg utformet løsningen, fulgte opp utviklingsoppgaver og sørget for at design og funksjonalitet hang godt sammen.",
            tags: ["Webdesign", "SQL"],
            image: karcher,
            alt: "Kärcher Norge nettside",
        },
    ],
};

export default work;