import { Helmet } from "react-helmet-async";

function SEO({ metaData }) {
  return (
    <Helmet>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />
      <meta name="author" content="ETech Globe Trading" />
      <meta name="robots" content="index, follow" />
      <title>{metaData.title}</title>
    </Helmet>
  );
}

export default SEO;
