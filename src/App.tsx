import BlurText from "./components/BlurText";

function App() {
    const handleAnimationComplete = () => {
        console.log("Animation completed!");
    };

    return (
        <div className=" flex justify-center items-center h-[100dvh]">
            <BlurText
                text="Coming Soon!"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className=" font-semibold text-9xl mb-8"
            />
        </div>
    );
}

export default App;
