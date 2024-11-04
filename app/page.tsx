import Image from "next/image";
import Intro from "@/components/Intro"
import Experience from "@/components/Experience"

import Meteors from "@/components/ui/meteors";
import ShineBorder from "@/components/ui/shine-border";

import DocLinks from "@/components/CustomDock";
import ProjectsSection from "@/components/Projects";


export default function Home() {
  return (
    <div className="relative w-9/12 mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <Meteors />
      <ShineBorder className="mb-5">
        <Intro />
      </ShineBorder>
      <Experience />
      <ProjectsSection />

      <DocLinks />


    </div>
  );
}

