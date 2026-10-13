import { photos } from '../../assets/images'
import { cn } from '../../lib/utils'
import type { Photo } from '../../types/media'
import { cardHover, cardSurface } from '../ui/styles'

interface PhotoGalleryProps {
  photos: readonly Photo[]
}

/**
 * Captioned photographs on a commodity page. From 700px the first one is twice as
 * wide as the others. Each photograph enlarges slightly while its card is hovered.
 */
export function PhotoGallery({ photos: items }: PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-grid-gap">
      {items.map((item) => {
        const image = photos[item.image]

        return (
          <figure
            key={item.image}
            className={cn(
              cardSurface,
              cardHover,
              'group overflow-hidden from-700:first:[grid-column:span_2]',
            )}
          >
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              alt={item.caption}
              loading="lazy"
              className="block aspect-[4/3] w-full object-cover transition-[transform] duration-[600ms] ease-brand group-hover:[transform:scale(1.02)] motion-reduce:transition-none from-700:group-first:aspect-video"
            />
            <figcaption className="px-4 py-3 text-card/[1.6] text-copy">
              {item.caption}
            </figcaption>
          </figure>
        )
      })}
    </div>
  )
}
