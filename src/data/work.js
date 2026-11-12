import digiPant from "../assets/images/digiPant.png";
import frankenStein from "../assets/images/frankenStein.png";
import eggxact from "../assets/images/eggxact.png";
import karcher from "../assets/images/karcherUtleie.png";
import frydenbo from "../assets/images/frydenbo-1.png";
import telaris from "../assets/images/telaris.png";
import karcherRenhold from "../assets/images/karcher-renhold.png";
import karcherMic from "../assets/images/karcher-mic.png";
import nettpartnerRapport from "../assets/images/nettpartner-report.png"

const work = {
    eyebrow: "Prosjekter",
    title: "Utvalgte prosjekter",
    intro: "Et utvalg av prosjekter innen design, utvikling og visuelle konsepter. Noen av bildene er klikkbare og tar deg til det aktuelle prosjektet.",

    projects: [
        {
            number: "01",
            title: "DigiPant - App",
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
            title: "Eggxact - App",
            description:
                "Et eget prosjekt jeg utviklet for å lære React Native på egen hånd. Appen lar deg velge mellom bløtkokt, smilende, medium og hardkokt egg, og setter en nedtelling basert på ønsket koketid.",
            tags: ["UX/UI", "React Native", "Logo", "Prototype"],
            image: eggxact,
            alt: "Eggxact mobilapplikasjon",
        },
        {
            number: "04",
            title: "Karcher - Utleieportal",
            description:
                "Utvikling av en digital utleieportal for Kärcher Norge i tett samarbeid med utvikler. Jeg utformet løsningen, fulgte opp utviklingsoppgaver og sørget for at design og funksjonalitet hang godt sammen.",
            tags: ["Webdesign", "SQL"],
            image: karcher,
            alt: "Kärcher Norge nettside",
            url: "https://www.karcherutleie.no/",
        },
        {
            number: "05",
            title: "Frydenbø Bil - Web",
            description:
                "Utvikling og utforming av Frydenbø Bil sitt nye nettsted. Siden henter data fra HubSpot, og kobler sammen informasjon om alle merker, spesifikke modeller, lokale avdelinger og aktive kampanjer.",
            tags: ["Webdesign", "Frontend", "Figma", "HubSpot"],
            image: frydenbo,
            alt: "Frydenbø Bil nettside",
            url: "https://www.frydenbo-bil.no/",
        },
        {
            number: "06",
            title: "Telaris - Web",
            description:
                "Oppsett av visuell profil, design av web og utvikling av web og moduler som gjør det enkelt å vedlikeholde og legge inn ny informasjon av bedriften selv.",
            tags: ["Webdesign", "Frontend", "Figma", "HubSpot"],
            image: telaris,
            alt: "Telaris nettside",
            url: "https://telaris.no/",
        },
        {
            number: "07",
            title: "Karcher - Renhold katalog",
            description:
                "Oppsett av katalog helt fra bunnen. Innsamling av informasjon, produkter, kategorisering, informasjon og bygget det opp til en ferdig katalog som viser produktomfang innen Karchers produkter for manuelt renhold",
            tags: ["inDesign", "Adobe"],
            image: karcherRenhold,
            alt: "Karcher renhold katalog",
            url: "https://s1.kaercher-media.com/media/file/60087/manuelt-renhold-2018.pdf",
        },
        {
            number: "08",
            title: "Karcher - Redskapsbærere katalog",
            description:
                "Oppsett av katalog tilpasset det norske markedet for redskapsbærere og feiemaskiner.",
            tags: ["inDesign", "Adobe"],
            image: karcherMic,
            alt: "Karcher redskapsbærere katalog",
            url: "https://s1.kaercher-media.com/asset/media/file/41885/mic-brosjyre.pdf",
        },
        {
            number: "09",
            title: "Nettpartner - Bærekraftsrapport",
            description:
                "Oppsett og design av ny bærekraftsrapport for 2023. Frie tøyler til å utforme og inndele kapitler for en mer visuell opplevelse enn den tidligere versjonen som var et word-dokument med ren tekst.",
            tags: ["inDesign", "Adobe"],
            image: nettpartnerRapport,
            alt: "Karcher redskapsbærere katalog",
            url: "https://www.nettpartner.no/hubfs/Web/Om%20Nettpartner/B%C3%A6rekraft/B%C3%A6rekraftsrapporter/B%C3%A6rekraftsrapport%202023%20-%20Nettpartner.pdf",
        },



    ],
};

export default work;