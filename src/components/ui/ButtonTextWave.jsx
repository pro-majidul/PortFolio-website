import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
export function ButtonTextWave({
    children,
    as = "p",
    className,
    duration = 1,
    zDistance = 10,
    xDistance = 2,
    yDistance = -2,
    spread = 1,
    scaleDistance = 1.1,
    rotateYDistance = 10,
    transition = {},
}) {
    const MotionComponent = motion.create(as);

    return (
        <MotionComponent
            className={cn(
                "relative inline-block [perspective:500px]",
                "[--base-color:#ffffff] [--base-gradient-color:#000000]",
                "dark:[--base-color:#000000] dark:[--base-gradient-color:#ffffff]",

                className
            )}
            style={{ color: "var(--base-color)" }}
        >
            {children.split("").map((char, i) => {
                const delay = (i * duration * (1 / spread)) / children.length;

                return (
                    <motion.span
                        key={i}
                        className={cn(
                            "inline-block whitespace-pre [transform-style:preserve-3d]"
                        )}
                        initial={{
                            translateZ: 0,
                            scale: 1,
                            rotateY: 0,
                            color: "var(--base-color)",
                        }}
                        animate={{
                            translateZ: [0, zDistance, 0],
                            translateX: [0, xDistance, 0],
                            translateY: [0, yDistance, 0],
                            scale: [1, scaleDistance, 1],
                            rotateY: [0, rotateYDistance, 0],
                            color: [
                                "var(--base-color)",
                                "var(--base-gradient-color)",
                                "var(--base-color)",
                            ],
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            repeatDelay: (children.length * 0.05) / spread,
                            delay,
                            ease: "easeInOut",
                            ...transition,
                        }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </MotionComponent>
    );
}
