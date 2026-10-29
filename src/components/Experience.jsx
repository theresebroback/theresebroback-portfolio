const jobs = [
    {
        company: "Intuvio (MarkedsPartner)",
        role: "Digital designer / frontendutvikler",
        period: "2021 - 2026",
        description:
            "Design og utforming av web, trykksaker, arbeid med oppsett av visuelle profiler, salgsmateriell. Frontendutvikling med HTML/SASS/HubSpot CMS.",
    },
    {
        company: "Gyldendal Norsk Forlag",
        role: "Juniorutvikler",
        period: "2020 - 2021",
        description:
            "Utleid via Academic Work. Utviklet læringsspill hos Salaby med HTML, CSS og Vue.",
    },
    {
        company: "Academic Work (Academy)",
        role: "Intensivkurs i JavaScript",
        period: "2019-2020",
        description:
            "Intensivkurs over 12 uker i JavaScript. Bygget avslutningsoppgave i React og Sass.",
    },
    {
        company: "Kärcher Norge",
        role: "Markedskoordinator / grafisk designer",
        period: "2015 - 2019",
        description:
            "Grafisk design, utforming av salgsmateriell, kontakt med leverandører og trykkerier, oppfølging av visuell identitet for det norske markedet.",
    },
    {
        company: "Høgskolen i Gjøvik",
        role: "Bachelor i medieproduksjon",
        period: "2011 - 2014",
        description:
            "Fag innenfor grafisk design, typografi, markedsføring, programmering, prosjektstyring, IT, foto, video.",
    },
    
    
];

function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="experience__intro work__intro">
                    <span className="work__eyebrow">Arbeidserfaring og utdanning</span>
                    <h2>Min bakgrunn</h2>
                    <p>
                        En kombinasjon av grafisk design, visuell kommunikasjon og frontendutvikling – formet gjennom utdanning og praktisk erfaring.
                    </p>
                </div>

                <div className="experience__list">
                    {jobs.map((job) => (
                        <article
                            className="experience__item"
                            key={job.company}
                        >
                            <div className="experience__company">
                                <h3>{job.company}</h3>
                                <p>{job.role}</p>
                            </div>

                            <div className="experience__meta">
                                <span>{job.period}</span>
                            </div>

                            <div className="experience__description">
                                <p>{job.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
