import Hero from "@/components/hero";
import ImagePerformance from "../../../public/images/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      title="We serve high performance applications"
      image={ImagePerformance}
      alt="welding"
    />
  );
}
