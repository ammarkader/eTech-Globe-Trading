/** Class lists shared by the parts of the assistant. */

/**
 * A button that keeps the browser's own button typeface and size, as the buttons of
 * the assistant do in etech-final.html (it does not pass the page's typeface on to them).
 */
export const nativeButtonType =
  '[font-family:revert] [font-size:revert] leading-[normal] tracking-normal'

/** The violet focus ring of the assistant's text fields. */
export const fieldFocus =
  'focus:border-accent focus:[box-shadow:0_0_0_3px_rgba(83,58,253,0.15)] focus:outline-none'

/** Placeholder text in the browser's default grey, as in etech-final.html. */
export const fieldPlaceholder =
  'placeholder:text-[#757575] placeholder:opacity-100'
