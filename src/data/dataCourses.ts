import { colors } from "../styledConstantsColors";
import { Iexpert } from "../components/OurExperts/experts";

export interface IdataCourse {
  id: string,
  name: string,
  course: 'Programming' | 'Design' | 'Data science',
  color: string,
  level: 'Beginner friendly' | 'Intermediate',
  durationMonths: number
  startDate: string,
  priceSelf: number,
  priceGroup: number,
  descriptionShort: string
}

const dataCoursesOrder: IdataCourse[] = [
  {
    id: 'coursejava001',
    name: 'Java',
    course: 'Programming',
    color: colors.brand.green,
    level: 'Beginner friendly',
    durationMonths: 15,
    startDate: '15 Oct',
    priceSelf: 1200,
    priceGroup: 1500,
    descriptionShort: 'An object-oriented language that was made to be simple to read, write, and learn.',
  },
  {
    id: 'courseuxui001',
    name: 'UX/UI design',
    course: 'Design',
    color: colors.brand.violet,
    level: 'Beginner friendly',
    durationMonths: 15,
    startDate: '14 Dec',
    priceSelf: 1200,
    priceGroup: 1500,
    descriptionShort: 'Even the best application is bound to fail if you don’t pay attention to its UX and UI design.',
  },
  {
    id: 'coursemachine001',
    name: 'Machine Learning',
    course: 'Data science',
    color: colors.brand.orange,
    level: 'Beginner friendly',
    durationMonths: 15,
    startDate: '15 Oct',
    priceSelf: 1200,
    priceGroup: 1500,
    descriptionShort: 'Learn different model selection and feature selections techniques in machine learning.',
  },
  {
    id: 'coursejava002',
    name: 'Java',
    course: 'Programming',
    color: colors.brand.green,
    level: 'Beginner friendly',
    durationMonths: 15,
    startDate: '15 Oct',
    priceSelf: 1200,
    priceGroup: 1500,
    descriptionShort: 'An object-oriented language that was made to be simple to read, write, and learn.',
  },
  {
    id: 'courseuxui002',
    name: 'UX/UI design',
    course: 'Design',
    color: colors.brand.violet,
    level: 'Beginner friendly',
    durationMonths: 15,
    startDate: '14 Dec',
    priceSelf: 1200,
    priceGroup: 1500,
    descriptionShort: 'Even the best application is bound to fail if you don’t pay attention to its UX and UI design.',
  },
  {
    id: 'coursemachine002',
    name: 'Machine Learning',
    course: 'Data science',
    color: colors.brand.orange,
    level: 'Beginner friendly',
    durationMonths: 15,
    startDate: '15 Oct',
    priceSelf: 1200,
    priceGroup: 1500,
    descriptionShort: 'Learn different model selection and feature selections techniques in machine learning.',
  },
  {
    id: 'coursejava003',
    name: 'Java',
    course: 'Programming',
    color: colors.brand.green,
    level: 'Beginner friendly',
    durationMonths: 15,
    startDate: '15 Oct',
    priceSelf: 1200,
    priceGroup: 1500,
    descriptionShort: 'An object-oriented language that was made to be simple to read, write, and learn.',
  },
  {
    id: 'courseuxui003',
    name: 'UX/UI design',
    course: 'Design',
    color: colors.brand.violet,
    level: 'Beginner friendly',
    durationMonths: 15,
    startDate: '14 Dec',
    priceSelf: 1200,
    priceGroup: 1500,
    descriptionShort: 'Even the best application is bound to fail if you don’t pay attention to its UX and UI design.',
  },
  {
    id: 'coursemachine003',
    name: 'Machine Learning',
    course: 'Data science',
    color: colors.brand.orange,
    level: 'Beginner friendly',
    durationMonths: 15,
    startDate: '15 Oct',
    priceSelf: 1200,
    priceGroup: 1500,
    descriptionShort: 'Learn different model selection and feature selections techniques in machine learning.',
  },
]

const shuffle = (array: IdataCourse[]): IdataCourse[] => {
  let m: number = array.length, t, i;

  // Пока есть элементы для перемешивания
  while (m) {

    // Взять оставшийся элемент
    i = Math.floor(Math.random() * m--);

    // И поменять его местами с текущим элементом
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export const dataCourses: IdataCourse[] = shuffle(dataCoursesOrder);