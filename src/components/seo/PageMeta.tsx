import { canonicalUrl } from '../../lib/seo'

interface PageMetaProps {
  title: string
  description?: string
  /** Application path of the page. Omit for pages that must not have a canonical URL. */
  path?: string
  /** Title for link previews, when it differs from the document title. */
  ogTitle?: string
  /** Description for link previews, when it differs from the meta description. */
  ogDescription?: string
  noindex?: boolean
}

/**
 * Page-specific document metadata. React places these elements in the document head,
 * so they are written into each prerendered HTML file.
 *
 * A page with a canonical URL also gets its link-preview (Open Graph) title,
 * description and URL: its own title and description unless others are given.
 * There is no preview image; the approved design has none.
 */
export function PageMeta({
  title,
  description,
  path,
  ogTitle = title,
  ogDescription = description,
  noindex = false,
}: PageMetaProps) {
  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {path && <link rel="canonical" href={canonicalUrl(path)} />}
      {path && <meta property="og:title" content={ogTitle} />}
      {path && ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {path && <meta property="og:url" content={canonicalUrl(path)} />}
      {noindex && <meta name="robots" content="noindex" />}
    </>
  )
}
