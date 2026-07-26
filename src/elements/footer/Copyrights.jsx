import "@/styles/modules/footer/_footer_copyright.scss";

function Copyrights() {
  return (
    <section
      className="footer-copyrights__wrapper"
      aria-labelledby="copyrights-heading"
    >
      <div className="footer-copyrights__container">
        <p id="copyrights-heading">© 2026 ETech Global. All Rights Reserved.</p>
        <p>Website by Urbanist</p>
      </div>
    </section>
  );
}

export default Copyrights;
