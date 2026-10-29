import work from "../data/work";

function Work() {
    return (
        <section className="work" id="work">
            <div className="container">

                <div className="work__intro">
                    <span className="work__eyebrow">
                        {work.eyebrow}
                    </span>

                    <h2>{work.title}</h2>

                    <p>{work.intro}</p>
                </div>

                <div className="work__grid">
                    {work.projects.map((project) => (
                        <article
                            className="project-card"
                            key={project.number}
                        >
                            <div className="project-card__image">
                                {project.url ? (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Se prosjektet ${project.title}`}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.alt}
                                        />
                                    </a>
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.alt}
                                    />
                                )}
                            </div>

                            <div className="project-card__content">
                                <h3>
                                    {project.url ? (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {project.title}
                                        </a>
                                    ) : (
                                        project.title
                                    )}
                                </h3>
                                <p>{project.description}</p>

                                <div className="project-card__tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Work;