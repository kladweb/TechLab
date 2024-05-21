export interface Ifilter {
  name: string,
  items: string[]
}

export const filters: Ifilter[] = [
  {
    name: 'Type',
    items: ['Course', 'Lesson']
  },
  {
    name: 'Subject',
    items: ['Data science', 'Design', 'Programming']
  },
  {
    name: 'Level',
    items: ['Beginner', 'Intermediate']
  },
  {
    name: 'Learning format',
    items: ['Self-paced', 'In group']
  },
]