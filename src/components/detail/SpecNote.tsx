interface SpecNoteProps {
  heading: string
  text: string
}

/**
 * A highlighted note under the specification table, such as the licences a buyer needs.
 * Its heading is an h3, under the h2 of the table. etech-final.html uses an h4 there,
 * which skips a level; the type is set here in full, so it looks the same.
 */
export function SpecNote({ heading, text }: SpecNoteProps) {
  return (
    <div className="mt-[22px] rounded-lg border border-l-[3px] border-[rgba(83,58,253,0.16)] border-l-accent bg-[rgba(226,228,255,0.35)] px-5 py-4 text-[0.93rem] [&+&]:mt-3">
      <h3 className="mb-1.5 text-[0.95rem]/[normal] font-semibold tracking-[-0.02em] text-wrap wrap-normal text-accent">
        {heading}
      </h3>
      <p className="text-body/[1.65] text-copy">{text}</p>
    </div>
  )
}
