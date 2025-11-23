import { CinematicHero } from "@/components/home/CinematicHero";
import { CinematicServices } from "@/components/home/CinematicServices";
import { CinematicProjects } from "@/components/home/CinematicProjects";
import { CinematicStudio } from "@/components/home/CinematicStudio";
import { CinematicContact } from "@/components/home/CinematicContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <CinematicHero />
      <CinematicServices />
      <CinematicProjects />
      <CinematicStudio />
      <CinematicContact />
    </main>
  );
}
