import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import TrustedBySection from "@/components/TrustedBySection";
import StatsSection from "@/components/StatsSection";
import AwardsSection from "@/components/AwardsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OurStorySection />
      <TrustedBySection />
      <StatsSection />
      <AwardsSection />
      <div
        className="w-full text-center py-4"
        style={{ paddingTop: "40px", paddingBottom: "40px", background: "black" }}
      >
        <p className="text-sm font-semibold" style={{ color: "#FF00FF" }}>
          © {new Date().getFullYear()} MindHub
        </p>
      </div>
    </>
  );
}
