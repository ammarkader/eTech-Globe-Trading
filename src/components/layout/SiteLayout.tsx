import type { ReactNode } from 'react'
import { ChatAssistant } from '../chat/ChatAssistant'
import { Footer } from './Footer'
import { Header } from './Header'

interface SiteLayoutProps {
  children: ReactNode
  /** For pages that are never the homepage, such as the static 404 page. */
  solidHeader?: boolean
}

/** The global shell: the header and footer around every page, and the assistant in its corner. */
export function SiteLayout({ children, solidHeader = false }: SiteLayoutProps) {
  return (
    <>
      <Header alwaysSolid={solidHeader} />
      {children}
      <Footer />
      <ChatAssistant />
    </>
  )
}
