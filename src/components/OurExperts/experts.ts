import { colors } from "../../styledConstantsColors";
import andrusKask from "../../assets/img/experts/AndrusKask.png";
import juriRatas from "../../assets/img/experts/JuriRatas.png";
import tomWatson from "../../assets/img/experts/TomWatson.png";
import aliceBerg from "../../assets/img/experts/AliceBerg.png";
import gerliTusik from "../../assets/img/experts/GerliTusik.png";
import tuomasArtman from "../../assets/img/experts/TuomasArtman.png";
import karolaKarlson from "../../assets/img/experts/KarolaKarlson.png";
import kseniaNikkel from "../../assets/img/experts/KseniaNikkel.png";
import zanderWhitehurst from "../../assets/img/experts/ZanderWhitehurst.png";
import annaLaur from "../../assets/img/experts/AnnaLaur.png";

export interface Iexpert {
  id: string,
  name: string,
  color: string,
  src: string;
  course: string,
  desc: string,
  experience: string,
  expItems: string,
  price: number
  info: string,
  about: string
}

const expertsOrder: Iexpert[] = [
  {
    id: 'andruskask',
    name: 'Andrus Kask',
    color: colors.brand.green,
    src: andrusKask,
    course: 'Programming',
    desc: 'Frontend Developer',
    experience: '5+ years of experience',
    expItems: 'Co-Founder, CEO at Linear, Uber',
    info: 'Experienced programmer adept at developing web, mobile, and software solutions, leading teams to success.',
    price: 30,
    about: 'With more than 5 years of hands-on experience in software development, I\'ve honed my skills in crafting robust solutions for diverse web-based projects. My expertise lies in architecting and implementing scalable systems for websites, web applications, and mobile apps. Throughout my career, I\'ve successfully led cross-functional teams in delivering high-quality products, navigating complexities with ease. Over the past 2 years, I\'ve been dedicated to mentoring aspiring developers, imparting knowledge, and fostering growth within the tech community.',
  },
  {
    id: 'juriratas',
    name: 'Juri Ratas',
    color: colors.brand.green,
    src: juriRatas,
    course: 'Programming',
    desc: 'Django Developer',
    experience: '2+ years of experience',
    expItems: 'Algoasaurujs, Salt',
    info: 'Skilled coder with expertise in web and app development, guiding projects from concept to completion.',
    price: 30,
    about: 'As a seasoned programmer with over 2 years in the field, I\'ve dedicated myself to shaping exceptional user experiences through innovative design solutions. My focus has been on developing intuitive interfaces for digital platforms, spanning websites, web applications, and mobile apps. I thrive in leadership roles, having spearheaded multiple projects from conception to deployment, ensuring adherence to best practices and standards. Recently, I\'ve embraced the role of an educator, leveraging my expertise to mentor and empower emerging talents within the programming realm.'
  },
  {
    id: 'tomwatson',
    name: 'Tom Watson',
    color: colors.brand.green,
    src: tomWatson,
    course: 'Programming',
    desc: 'Senior Frontend Developer, React.js',
    experience: '15+ years of experience',
    expItems: 'Bolt, Bolt Food, Apple',
    info: 'A seasoned programming virtuoso, stands as a beacon of excellence in the field. One of Tom\'s standout qualities is his knack for crafting elegant and efficient code.',
    price: 30,
    about: 'With a solid foundation of over 8 years in software engineering, I\'ve cultivated a deep understanding of crafting dynamic solutions tailored to modern digital landscapes. My forte lies in conceptualizing and executing design strategies for a wide array of digital products, encompassing websites, web apps, and mobile applications. I possess a proven track record of steering cross-disciplinary teams through intricate development cycles, delivering high-impact solutions on time and within budget. Over the last 3 years, I\'ve enthusiastically embraced the role of a mentor, guiding aspiring programmers in mastering technical skills and fostering a collaborative learning environment.'
  },
  {
    id: 'aliceberg',
    name: 'Alice Berg',
    color: colors.brand.orange,
    src: aliceBerg,
    course: 'Data science',
    desc: 'Data Scientist',
    experience: '8+ years of experience',
    expItems: 'Micorsoft, Netflix',
    info: 'Alice actively contributes to the community by publishing research papers, participating in industry conferences, and mentoring aspiring data scientists.',
    price: 30,
    about: 'Leveraging over 8 years of experience in data science, I specialize in extracting valuable insights from complex datasets to drive strategic decision-making. My expertise spans the entire data lifecycle, from data acquisition and cleaning to modeling and visualization. I have a proven track record of leading interdisciplinary teams in developing cutting-edge analytical solutions for a variety of industries. Over the past 2 years, I\'ve been actively engaged in knowledge sharing, mentoring aspiring data scientists, and conducting workshops to democratize data literacy.'
  },
  {
    id: 'gerlitusik',
    name: 'Gerli Tusik',
    color: colors.brand.orange,
    src: gerliTusik,
    course: 'Data science',
    desc: 'Data Analyst',
    experience: '17+ years of experience',
    expItems: 'Spotify, Airbnb',
    info: 'Henrik drives innovation through research, conference participation, and mentoring to empower future data scientists.',
    price: 30,
    about: 'With a solid background in data science spanning more than 17 years, I excel in transforming raw data into actionable intelligence to solve real-world problems. My skill set includes advanced statistical analysis, machine learning techniques, and deep learning frameworks. I have a successful history of spearheading data-driven initiatives, collaborating with stakeholders to define project goals and deliver impactful insights. In the last 3 years, I\'ve dedicated myself to fostering a culture of continuous learning by mentoring junior data scientists and contributing to open-source projects.'
  },
  {
    id: 'tuomasartman',
    name: 'Tuomas Artman',
    color: colors.brand.orange,
    src: tuomasArtman,
    course: 'Data science',
    desc: 'Machine Learning Engineer',
    experience: '5+ years of experience',
    expItems: 'Starship Technologies',
    info: 'Tuomas enriches the data science field through research, conference engagement, and mentorship initiatives.',
    price: 30,
    about: 'Drawing on over 7 years of experience in data science, I possess a proven ability to unlock the value hidden within complex datasets. My expertise lies in building predictive models, conducting exploratory data analysis, and developing scalable data pipelines. I have a strong track record of leading cross-functional teams in delivering data-driven solutions that drive business growth and innovation. Over the past 4 years, I\'ve been passionate about sharing my knowledge through teaching, writing technical articles, and speaking at conferences, aiming to inspire the next generation of data scientists and contribute to the broader data science community.'
  },
  {
    id: 'karolakarlson',
    name: 'Karola Karlson',
    color: colors.brand.violet,
    src: karolaKarlson,
    course: 'Design',
    desc: 'Senior UX designer',
    experience: '12+ years of experience',
    expItems: 'Duolingo, Wolt, Wise',
    info: 'Collaboration is integral to Karola’s design philosophy. He seamlessly integrates with multidisciplinary teams fostering an environment where design aligns with development goals.',
    price: 30,
    about: 'With over 12 years of experience in UX design, I specialize in creating intuitive and engaging digital experiences that prioritize user satisfaction and business goals. My expertise encompasses user research, wireframing, prototyping, and usability testing across various platforms. I have a proven track record of collaborating closely with cross-functional teams to deliver user-centered designs that drive positive outcomes. Over the past 2 years, I\'ve been dedicated to mentoring junior UX designers, advocating for user-centric design principles, and staying abreast of emerging trends in the field.'
  },
  {
    id: 'ksenianikkel',
    name: 'Ksenia Nikkel',
    color: colors.brand.violet,
    src: kseniaNikkel,
    course: 'Design',
    desc: 'Graphic Desginer',
    experience: '18+ years of experience',
    expItems: 'Pop Meals, Velvet, Nokia',
    info: 'Kseinja thrives on collaborative design, seamlessly uniting with teams to ensure designs meet development objectives.',
    price: 30,
    about: 'With a wealth of experience spanning over 18 years in graphic design, I specialize in creating impactful visual identities and compelling brand collateral across print and digital mediums. My portfolio showcases a diverse range of projects, including logos, marketing materials, and illustrations, crafted with meticulous attention to detail and a deep understanding of design principles. I thrive in collaborative environments, working closely with clients to conceptualize and execute creative solutions that resonate with their target audience. Over the past 4 years, I\'ve been passionate about nurturing emerging talent in graphic design, mentoring aspiring designers, and advocating for design excellence within the industry.'
  },
  {
    id: 'zanderwhitehurst',
    name: 'Zander Whitehurst',
    color: colors.brand.violet,
    src: zanderWhitehurst,
    course: 'Design',
    desc: 'UX/UI Designer',
    experience: '5+ years of experience',
    expItems: 'Lhotse, Clark, Hometogo',
    info: 'Zander emphasizes collaborative design, integrating seamlessly with teams to align design with development goals.',
    price: 30,
    about: 'With 5+ years in UX design, I create intuitive digital experiences, blending user needs with business goals. Skilled in research, wireframing, and prototyping, I collaborate to deliver user-centric designs. Also mentor and stay updated on industry trends.'
  },
  {
    id: 'annalaur',
    name: 'Anna Laur',
    color: colors.brand.violet,
    src: annaLaur,
    course: 'Design',
    desc: 'Web Designer',
    experience: '8+ years of experience',
    expItems: 'Softr, Saas group',
    info: 'Anna champions collaborative design, seamlessly merging with teams to ensure design meets development objectives.',
    price: 30,
    about: 'As a seasoned web designer with more than 8 years of experience, I have a keen eye for blending aesthetics with functionality to deliver visually stunning and user-friendly websites. My skill set includes proficiency in HTML, CSS, JavaScript, and responsive design techniques. I excel in translating client requirements into pixel-perfect designs, ensuring seamless navigation and optimal user experience across devices. Over the past 3 years, I\'ve been actively involved in mentoring aspiring web designers, sharing industry best practices, and continuously refining my craft to stay ahead in a rapidly evolving digital landscape.'
  }
];

const shuffle = (array: Iexpert[]): Iexpert[] => {
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

export const experts: Iexpert[] = shuffle(expertsOrder);