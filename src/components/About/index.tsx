import ShinyText from "../ui/ShinyText";

type Props = {};

const About = ({}: Props) => {
    return (
        <div id="about" className=" h-[70vh] grid place-items-center">
            <p className=" text-3xl leading-relaxed w-full md:w-1/2 text-center mx-auto ">
                Frontend Engineer and specialist in{" "}
                <ShinyText text="Web Development" disabled={false} speed={3} />{" "}
                with over{" "}
                <ShinyText text="4 years" disabled={false} speed={3} /> of
                industry expertise. Skilled in{" "}
                <ShinyText text="React" disabled={false} speed={3} /> and{" "}
                <ShinyText text="TypeScript" disabled={false} speed={3} />,
                enabling the creation of responsive and high-performance
                applications. I currently works as a{" "}
                <ShinyText
                    text="Lead Frontend Engineer"
                    disabled={false}
                    speed={3}
                />{" "}
                at GRID78.
            </p>
        </div>
    );
};

export default About;
