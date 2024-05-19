import { colors } from "../styledConstantsColors";

export interface IdataUnit {
  id: string,
  name: string,
  course: 'Programming' | 'Design' | 'Data science',
  color: string,
  level: 'Beginner friendly' | 'Intermediate',
  durationHours: number
  price: number,
  lessons: number
}

export const dataUnits: IdataUnit[] = [
  {
    id: 'unitjava001',
    name: 'Introduction to Java',
    course: 'Programming',
    color: colors.brand.green,
    level: 'Beginner friendly',
    durationHours: 14,
    price: 150,
    lessons: 10
  },
  {
    id: 'unitux001',
    name: 'What is UX?',
    course: 'Design',
    color: colors.brand.violet,
    level: 'Beginner friendly',
    durationHours: 14,
    price: 150,
    lessons: 10
  },
  {
    id: 'unitbusiness001',
    name: 'Business models',
    course: 'Data science',
    color: colors.brand.orange,
    level: 'Beginner friendly',
    durationHours: 14,
    price: 150,
    lessons: 10
  },
  {
    id: 'unitjava002',
    name: 'Introduction to Java',
    course: 'Programming',
    color: colors.brand.green,
    level: 'Beginner friendly',
    durationHours: 14,
    price: 150,
    lessons: 10
  },
  {
    id: 'unitux002',
    name: 'What is UX?',
    course: 'Design',
    color: colors.brand.violet,
    level: 'Beginner friendly',
    durationHours: 14,
    price: 150,
    lessons: 10
  },
  {
    id: 'unitbusiness002',
    name: 'Business models',
    course: 'Data science',
    color: colors.brand.orange,
    level: 'Beginner friendly',
    durationHours: 14,
    price: 150,
    lessons: 10
  },
  {
    id: 'unitjava003',
    name: 'Introduction to Java',
    course: 'Programming',
    color: colors.brand.green,
    level: 'Beginner friendly',
    durationHours: 14,
    price: 150,
    lessons: 10
  },
  {
    id: 'unitux003',
    name: 'What is UX?',
    course: 'Design',
    color: colors.brand.violet,
    level: 'Beginner friendly',
    durationHours: 14,
    price: 150,
    lessons: 10
  },
  {
    id: 'unitbusiness003',
    name: 'Business models',
    course: 'Data science',
    color: colors.brand.orange,
    level: 'Beginner friendly',
    durationHours: 14,
    price: 150,
    lessons: 10
  },
]