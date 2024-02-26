import FeaturedCourses from "../components/FeaturedCourses";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-center text-2xl"></h1>
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
}
