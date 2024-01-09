import Hero from "@/components/hero";
import ScaleImage from "../../../public/images/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      alt="Steel factory"
      image={ScaleImage}
      title="Scale your app to infinity."
    />
  );
}
