import SermonsHero from "@/components/SermonsHero";
import LatestSermon from "@/components/LatestSermon";
import SermonLibrary from "@/components/SermonLibrary";

export default function SermonsPage() {
  return (
    <main>
      <SermonsHero />

      <LatestSermon />

      <SermonLibrary />
    </main>
  );
}