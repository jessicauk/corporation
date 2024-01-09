import Hero from "@/components/hero";
import ImageReliability from "../../../public/images/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      alt="Reliability"
      title="Super high reliability hosting"
      image={ImageReliability}
    />
  );
}
