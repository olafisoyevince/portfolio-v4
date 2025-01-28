import prodImg from "../../assets/prodImg.jpg";

type Props = {};

const Projects = ({}: Props) => {
    const projectData = [
        {
            title: "Modernizing a Subscription Management Platform",
            description:
                "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
            link: "",
            imgSrc: prodImg,
        },
        {
            title: "Modernizing a Subscription Management Platform",
            description:
                "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
            link: "",
            imgSrc: prodImg,
        },
        {
            title: "Modernizing a Subscription Management Platform",
            description:
                "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
            link: "",
            imgSrc: prodImg,
        },
        {
            title: "Modernizing a Subscription Management Platform",
            description:
                "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
            link: "",
            imgSrc: prodImg,
        },
        {
            title: "Modernizing a Subscription Management Platform",
            description:
                "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
            link: "",
            imgSrc: prodImg,
        },
    ];

    return (
        <section className="flex flex-col gap-10" id="projects">
            {projectData.map((project) => (
                <div className=" p-10 rounded-[40px] border border-gray-700  md:flex gap-24   ">
                    <div className=" h-auto w-full md:w-1/2 flex flex-col justify-between">
                        <div className=" space-y-2">
                            <p className=" text-3xl leading-snug">
                                {project.title}{" "}
                            </p>
                            <p>{project.description}</p>
                        </div>

                        <a
                            className=" text-xs uppercase hover:underline hover:underline-offset-1"
                            href={project.link}
                        >
                            Visit site
                        </a>
                    </div>

                    <div className=" h-auto w-full md:w-1/2">
                        <img
                            src={project.imgSrc}
                            alt="prodImg"
                            className=" h-full w-full object-cover"
                        />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Projects;
