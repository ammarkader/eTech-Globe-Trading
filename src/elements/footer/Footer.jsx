import Copyrights from "./Copyrights";
import CtaBanner from "./CtaBanner";
import Events from "./Events";
import Main from "./Main";
import Newsletter from "./Newsletter";

function Footer({ page }) {
  return (
    <footer className="footer" role="contentinfo">
      {page.events && <Events />}
      {page.ctaBanner && <CtaBanner />}
      <Newsletter />
      <Main />
      <Copyrights />
    </footer>
  );
}

export default Footer;
