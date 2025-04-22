import "@/styles/modules/footer/_footer_copyright.scss";

function Copyrights() {
  return (
    <section
      className="footer-copyrights__wrapper"
      aria-labelledby="copyrights-heading"
    >
      <div className="footer-copyrights__container">
        <p id="copyrights-heading">© 2025 ETech Global. All Rights Reserved.</p>
        <p>
          Website by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Urbanist Website"
          >
            Urbanist
          </a>
        </p>
      </div>
    </section>
  );
}

export default Copyrights;
