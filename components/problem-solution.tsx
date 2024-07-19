"use client"
import React, { useState, useEffect } from "react";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

interface ProblemAndSolutionProps {
  title: string;
  children: React.ReactNode;
}
function ProblemAndSolution({ title, children }: ProblemAndSolutionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is in view
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  return (
    <section
      className="relative flex h-screen flex-col items-center justify-center bg-background  "
      id="seguranca"
    >
      <div className="container mx-auto flex flex-col p-4 md:flex-row lg:p-12">
        <div
          className={`w-full md:w-1/2 ${isVisible ? "animate-slide-in-right" : "invisible"}`}
          ref={ref}
        >
          <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
            {title}
          </h2>
          {children}
        </div>
        <div className="flex w-full items-center justify-center md:w-1/2">
          <FontAwesomeIcon icon={faShieldHalved} size={"10x"} className="text-primary" />
        </div>
      </div>
    </section>
  );
}

export default ProblemAndSolution;
