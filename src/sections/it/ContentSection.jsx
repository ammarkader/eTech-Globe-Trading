import "@/styles/pages/it/_it_content_section.scss";

function ContentSection({
  title,
  content,
  image,
  imageAlt = "",
  imagePosition = "left",
  background = "black",
}) {
  return (
    <section
      className={`it-content-section it-content-section--${background} it-content-section--image-${imagePosition}`}
    >
      <div className="it-content-section__container">
        <div className="it-content-section__content">
          {title && <h2>{title}</h2>}

          {content && <div className="it-content-section__text">{content}</div>}
        </div>

        {image && (
          <div className="it-content-section__image">
            <div className="image">
              <img src={image} alt={imageAlt} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContentSection;
