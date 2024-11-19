import { BentoGridThirdDemo } from "@/components/homeBentoGrid";
import Head from "next/head";
import React from "react";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naman Doshi",
    url: "https://naman-doshi.vercel.app",
    sameAs: [
      "https://github.com/DoshiNaman",
      "https://www.linkedin.com/in/naman-doshi-007/",
    ],
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Somhako",
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <BentoGridThirdDemo />
    </>
  );
};

export default Home;
