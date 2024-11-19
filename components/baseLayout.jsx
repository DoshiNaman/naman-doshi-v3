"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React, { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { FooterDock } from "./footerDock";
import { usePathname } from "next/navigation";
import { Vortex } from "./ui/vortex";
const loadingStates = [
  {
    text: "Crafting UI Components",
  },
  {
    text: "Optimizing for Speed",
  },
  {
    text: "Polishing Animations",
  },
  {
    text: "Adjusting Responsive Layouts",
  },
  {
    text: "Debugging Browser Compatibility",
  },
  {
    text: "Enhancing Accessibility",
  },
  {
    text: "Deploying to Production",
  },
  {
    text: "Portfolio is Ready!",
  },
];

const BaseLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const loadData = async () => {
      // Simulate loading
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={200}
          loop={false}
        />
      ) : (
        <>
          {pathname === "/journey" ? (
            <>
              <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={120}
                baseHue={120}
                className="flex items-center flex-col justify-center w-full min-h-[100vh] h-auto"
              >
                {children}
                <FooterDock />
              </Vortex>
            </>
          ) : (
            <>
              <BackgroundBeamsWithCollision>
                {children}
                <FooterDock />
              </BackgroundBeamsWithCollision>
            </>
          )}
        </>
      )}
    </>
  );
};

export default BaseLayout;
