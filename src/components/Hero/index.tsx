type Props = {};

const Hero = ({}: Props) => {
    return (
        <div className="flex flex-col justify-center items-start h-[80vh]">
            <h1 className="text-6xl font-semibold text-center text-neutral-100 uppercase">
                I'm Oluwaseun Olafisoye
            </h1>
            <p className="text-lg text-center text-neutral-200">
                I'm a Frontend Engineer based in Lagos, Nigeria.
            </p>
        </div>
    );
};

export default Hero;
