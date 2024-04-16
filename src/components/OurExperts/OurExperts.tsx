import { useWindowSize } from "../../hooks/useWindowSize";

import { StyledContainer, StyledFrameHeader, StyledFrameText } from "../../styledConstants"

import { colors } from "../../styledConstantsColors";

import { StyledExpertSectionWrap } from "./StyledOurExperts"
import { ExpertCard } from "./ExpertCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../Slider/slider.css';
import "./expertsSlider.css";

import yuri from '../../assets/img/expert1.png'
import alice from '../../assets/img/expert2.png'
import tom from '../../assets/img/expert3.png'
import andrus from '../../assets/img/expert5.png'
import { RightSideLink } from "../LinkWithRightArrow/LinkWithRightArrow";

export interface Iexpert {
  name: string,
  color: string,
  desc: string,
  src: string;
  course: string,
  info: string,
  price: number
}

export const experts: Iexpert[] = [
  {
    name: 'Juri Ratas',
    color: colors.brand.orange,
    desc: 'Co-founder of the programming academy',
    src: yuri,
    course: 'Design',
    info: 'Collaboration is integral to Juri’s design philosophy. He seamlessly integrates with multidisciplinary teams fostering an environment where design aligns with development goals.',
    price: 30
  },
  {
    name: 'Alice Berg',
    color: colors.brand.turquoise,
    desc: 'Co-founder of the TechLab',
    src: alice,
    course: 'Data science',
    info: 'Alice actively contributes to the community by publishing research papers, participating in industry' +
      ' conferences, and mentoring aspiring data scientists.',
    price: 30
  },
  {
    name: 'Tom Watson',
    color: colors.brand.green,
    desc: 'Co-founder of the programming academy',
    src: tom,
    course: 'Programming',
    info: 'A seasoned programming virtuoso, stands as a beacon of excellence in the field. One of Tom\'s standout' +
      ' qualities is his knack for crafting elegant and efficient code.',
    price: 30
  },
  {
    name: 'Andrus Kask',
    color: colors.brand.turquoise,
    desc: 'Co-founder of the TechLab',
    src: andrus,
    course: 'Programming',
    info: 'A seasoned programming virtuoso, stands as a beacon of excellence in the field. One of Tom\'s standout' +
      ' qualities is his knack for crafting elegant and efficient code.',
    price: 30
  },
  {
    name: 'Juri Ratas',
    color: colors.brand.orange,
    desc: 'Co-founder of the programming academy',
    src: yuri,
    course: 'Design',
    info: 'Collaboration is integral to Juri’s design philosophy. He seamlessly integrates with multidisciplinary teams fostering an environment where design aligns with development goals.',
    price: 30
  },
  {
    name: 'Alice Berg',
    color: colors.brand.turquoise,
    desc: 'Co-founder of the TechLab',
    src: alice,
    course: 'Data science',
    info: 'Alice actively contributes to the community by publishing research papers, participating in industry' +
      ' conferences, and mentoring aspiring data scientists.',
    price: 30
  },
  {
    name: 'Juri Ratas',
    color: colors.brand.orange,
    desc: 'Co-founder of the programming academy',
    src: yuri,
    course: 'Design',
    info: 'Collaboration is integral to Juri’s design philosophy. He seamlessly integrates with multidisciplinary teams fostering an environment where design aligns with development goals.',
    price: 30
  },
  {
    name: 'Alice Berg',
    color: colors.brand.turquoise,
    desc: 'Co-founder of the TechLab',
    src: alice,
    course: 'Data science',
    info: 'Alice actively contributes to the community by publishing research papers, participating in industry' +
      ' conferences, and mentoring aspiring data scientists.',
    price: 30
  },
  {
    name: 'Tom Watson',
    color: colors.brand.green,
    desc: 'Co-founder of the programming academy',
    src: tom,
    course: 'Programming',
    info: 'A seasoned programming virtuoso, stands as a beacon of excellence in the field. One of Tom\'s standout' +
      ' qualities is his knack for crafting elegant and efficient code.',
    price: 30
  },
  {
    name: 'Andrus Kask',
    color: colors.brand.turquoise,
    desc: 'Co-founder of the TechLab',
    src: andrus,
    course: 'Programming',
    info: 'A seasoned programming virtuoso, stands as a beacon of excellence in the field. One of Tom\'s standout' +
      ' qualities is his knack for crafting elegant and efficient code.',
    price: 30
  },
  {
    name: 'Juri Ratas',
    color: colors.brand.orange,
    desc: 'Co-founder of the programming academy',
    src: yuri,
    course: 'Design',
    info: 'Collaboration is integral to Juri’s design philosophy. He seamlessly integrates with multidisciplinary teams fostering an environment where design aligns with development goals.',
    price: 30
  },
  {
    name: 'Alice Berg',
    color: colors.brand.turquoise,
    desc: 'Co-founder of the TechLab',
    src: alice,
    course: 'Data science',
    info: 'Alice actively contributes to the community by publishing research papers, participating in industry' +
      ' conferences, and mentoring aspiring data scientists.',
    price: 30
  }
];

export const OurExperts = () => {
  const {width = 0} = useWindowSize()

  return (<StyledExpertSectionWrap>
    <StyledContainer>
      <StyledFrameHeader>Our <span>experts</span></StyledFrameHeader>
      <StyledFrameText $black><span>TechLab</span> classes are taught by industry leaders excited to share their tools,
        techniques with you.</StyledFrameText>
    </StyledContainer>
    {width > 1023 && <Swiper
      slidesPerView={'auto'}
      slidesPerGroup={3}
      spaceBetween={16}
      loop={true}
      pagination={{
        type: 'fraction',
      }}
      navigation
      modules={[Pagination, Navigation, A11y]}
      className="expertsSwiper">
      {experts.map((expert, index) =>
        <SwiperSlide key={index}>
          <ExpertCard name={expert.name} src={expert.src} desc={expert.desc} color={expert.color} />
        </SwiperSlide>
      )}
    </Swiper>}
    {width < 1024 && width > 767 && <Swiper
      slidesPerView={'auto'}
      slidesPerGroup={3}
      spaceBetween={16}
      loop={true}
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: 1,
      }
      }
      modules={[Pagination, Navigation, A11y]}
      className="expertsSwiper">
      {experts.map((expert, index) =>
        <SwiperSlide key={index}>
          <ExpertCard name={expert.name} src={expert.src} desc={expert.desc} color={expert.color} />
        </SwiperSlide>
      )}
    </Swiper>}
    {width < 768 && <Swiper
      slidesPerView={'auto'}
      slidesPerGroup={3}
      spaceBetween={width < 480 ? 0 : 16}
      loop={true}
      pagination={true}
      modules={[Pagination, Navigation, A11y]}
      className="expertsSwiper">
      {experts.map((expert, index) =>
        <SwiperSlide key={index}>
          <ExpertCard name={expert.name} src={expert.src} desc={expert.desc} color={expert.color} />
        </SwiperSlide>
      )}
    </Swiper>}
    <RightSideLink text={'All TechLab teachers'} path={'/'} isBlack isRightSided />
  </StyledExpertSectionWrap>)
}