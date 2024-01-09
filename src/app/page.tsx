import Hero from "@/components/hero";
import HomeImage from "../../public/images/home.jpg";
import "./globals.css";

export default function Home() {
  return (
    <Hero
      title="Professional Cloud Hosting"
      image={HomeImage}
      alt="car factory"
    />
  );
}
