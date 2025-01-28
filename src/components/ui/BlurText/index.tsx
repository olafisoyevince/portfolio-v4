import { useRef, useEffect, useState } from "react";
import { useSprings, animated, SpringValue } from "@react-spring/web";

interface AnimationStep {
    filter?: string;
    opacity?: number;
    transform?: string;
}

interface BlurTextProps {
    text?: string;
    delay?: number;
    className?: string;
    animateBy?: "words" | "letters";
    direction?: "top" | "bottom";
    threshold?: number;
    rootMargin?: string;
    animationFrom?: AnimationStep;
    animationTo?: AnimationStep[];
    easing?: (t: number) => number;
    onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
    text = "",
    delay = 200,
    className = "",
    animateBy = "words",
    direction = "top",
    threshold = 0.1,
    rootMargin = "0px",
    animationFrom,
    animationTo,
    easing = (t) => t, // Default to linear easing
    onAnimationComplete,
}) => {
    const elements = animateBy === "words" ? text.split(" ") : text.split("");
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);
    const animatedCount = useRef(0);

    // Default animations based on direction
    const defaultFrom: AnimationStep =
        direction === "top"
            ? {
                  filter: "blur(10px)",
                  opacity: 0,
                  transform: "translate3d(0,-50px,0)",
              }
            : {
                  filter: "blur(10px)",
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
              };

    const defaultTo: AnimationStep[] = [
        {
            filter: "blur(5px)",
            opacity: 0.5,
            transform:
                direction === "top"
                    ? "translate3d(0,5px,0)"
                    : "translate3d(0,-5px,0)",
        },
        { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        elements.length,
        elements.map((_, i) => ({
            from: animationFrom || defaultFrom,
            to: inView
                ? async (next: (props: AnimationStep) => Promise<void>) => {
                      for (const step of animationTo || defaultTo) {
                          await next(step);
                      }
                      animatedCount.current += 1;
                      if (
                          animatedCount.current === elements.length &&
                          onAnimationComplete
                      ) {
                          onAnimationComplete();
                      }
                  }
                : animationFrom || defaultFrom,
            delay: i * delay,
            config: { easing },
        }))
    );

    return (
        <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
            {springs.map((props, index) => (
                <animated.span
                    key={index}
                    style={props as Record<string, SpringValue>}
                    className="inline-block transition-transform will-change-[transform,filter,opacity]"
                >
                    {elements[index] === " " ? "\u00A0" : elements[index]}
                    {animateBy === "words" &&
                        index < elements.length - 1 &&
                        "\u00A0"}
                </animated.span>
            ))}
        </p>
    );
};

export default BlurText;
