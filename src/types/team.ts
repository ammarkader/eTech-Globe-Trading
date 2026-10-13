/** Team and leadership avatars are initials: the approved visual, not a placeholder. */
export interface TeamMember {
  initials: string
  name: string
  role: string
  location: string
}

export interface LeadershipMessage {
  initials: string
  quote: string
  name: string
  role: string
}
