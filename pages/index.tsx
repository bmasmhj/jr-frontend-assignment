import PopularArtist from "@/components/common/PopularArtist";
import HeroSection from "@/components/feature/HeroSection";
import MainLayout from "@/components/layout/MainLayout";

export default function Home({}) {
  return (
    <MainLayout title="Home" description="Home page">
      <HeroSection />
      <PopularArtist />
    </MainLayout>  
  );
}
