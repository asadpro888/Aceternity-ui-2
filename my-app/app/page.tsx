import Image from "next/image";
import CardSpotlightDemo from "./Card";
import BackgroundLinesDemo from "./FlowCard";
import BentoGridDemo from "./Bento";
import CardHoverEffectDemo from "./Hover";
import CanvasRevealEffectDemo3 from "./Reveal";
import CardStackDemo from "./Stack";
import CanvasRevealEffectDemo from "./Three";
import CompareDemo from "./Campare";
import CoverDemo from "./Cover";
import GlowingStarsBackgroundCardPreview from "./Stars";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <CardSpotlightDemo/>
      <BackgroundLinesDemo/>
      <BentoGridDemo/>
      <CardHoverEffectDemo/>
      <CanvasRevealEffectDemo3/>
      <CardStackDemo/>
      <CanvasRevealEffectDemo/>
      <CompareDemo/>
      <CoverDemo/>
      <GlowingStarsBackgroundCardPreview/>
    </div>
  );
}
