import Intro from "@/components/intro";
import SectionDivider from "@/components/section-devider";
import About from "@/components/about-me";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
