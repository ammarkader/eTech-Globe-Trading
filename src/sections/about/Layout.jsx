import CoreValues from "./CoreValues";
import Intro from "./Intro";
import Partners from "./Partners";
import Stats from "./Stats";
import Team from "./Team";
import FeaturedImg from "@/assets/img-about-featured.jpeg";
import FeaturedImage from "@/components/FeaturedImage";

function Layout() {
  return (
    <>
      <FeaturedImage image={FeaturedImg} alt="about-featured-image" />
      <Stats />
      <Intro />
      <Partners />
      <CoreValues />
      <Team />
    </>
  );
}

export default Layout;
