import { photos } from '../../assets/images'
import { cn } from '../../lib/utils'
import type { Project } from '../../types/project'
import { Scene } from '../illustrations/Scene'
import { cardHover, cardSurface } from '../ui/styles'

interface ProjectGridProps {
  projects: readonly Project[]
}

/**
 * Project cards on a division page: a photograph, the project's name and its details.
 * A project without a photograph shows the illustrated crane on a navy tile.
 */
export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-grid-gap">
      {projects.map((project) => {
        const image = project.image && photos[project.image]

        return (
          <article
            key={project.name}
            className={cn(cardSurface, cardHover, 'overflow-hidden')}
          >
            {image ? (
              <img
                src={image.src}
                width={image.width}
                height={image.height}
                alt={project.name}
                loading="lazy"
                className="inline align-baseline"
              />
            ) : (
              <div
                aria-hidden="true"
                className="relative grid aspect-[16/10] place-items-center overflow-hidden bg-[linear-gradient(150deg,var(--color-deep-2),var(--color-deep))] text-[0.85rem] text-on-deep-3"
              >
                <Scene
                  scene="crane"
                  className="pointer-events-none absolute right-0 bottom-0 z-0 h-auto w-full opacity-90"
                />
              </div>
            )}
            <div className="px-card-sm pt-5 pb-card-sm">
              <h3 className="text-title/[1.25] tracking-[-0.02em] text-heading">
                {project.name}
              </h3>
              <p className="mt-1 text-card/[1.6] text-copy">
                {project.details}
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
