import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { useWindowSize } from "../../hooks/useWindowSize";
import { StyledContainer, StyledFrameHeader, StyledFrameText } from "../../styledConstants"
import { StyledExpertSectionWrap } from "./StyledOurExperts"
import { ExpertCard } from "./ExpertCard";
import { RightSideLink } from "../LinkWithRightArrow/LinkWithRightArrow";
import { experts } from "./experts";
import type { Iexpert } from "./experts";
import '../Slider/slider.css';
import "./expertsSlider.css";

export const OurExperts = () => {
  const {width = 0} = useWindowSize();
  const expertsSlideL: Iexpert[] = [...experts, ...experts, experts[5]];
  const expertsSlideS: Iexpert[] = [...experts, ...experts];

  return (<StyledExpertSectionWrap>
    <StyledContainer>
      <StyledFrameHeader>Our <span>experts</span></StyledFrameHeader>
      <StyledFrameText $black><span>TechLab</span> classes are taught by industry leaders excited to share their tools,
        techniques with you.</StyledFrameText>
    </StyledContainer>
    {width > 1023 && <Swiper
      // slidesPerView={'auto'}
      slidesPerView={7}
      slidesPerGroup={7}
      // spaceBetween={(width - (198 * 7)) / 6}
      loop={true}
      pagination={{
        type: 'fraction',
      }}
      navigation
      modules={[Pagination, Navigation, A11y]}
      className="expertsSwiper">
      {expertsSlideL.map((expert: Iexpert, index: number) =>
        <SwiperSlide key={index}>
          <ExpertCard name={expert.name} src={expert.src} desc={expert.desc} color={expert.color} />
        </SwiperSlide>
      )}
    </Swiper>}
    {width < 1024 && width > 767 && <Swiper
      // slidesPerView={'auto'}
      slidesPerView={5}
      slidesPerGroup={5}
      // spaceBetween={28}
      loop={true}
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: 1,
      }
      }
      modules={[Pagination, Navigation, A11y]}
      className="expertsSwiper">
      {expertsSlideS.map((expert, index) =>
        <SwiperSlide key={index}>
          <ExpertCard name={expert.name} src={expert.src} desc={expert.desc} color={expert.color} />
        </SwiperSlide>
      )}
    </Swiper>}
    {width < 768 && <Swiper
      // slidesPerView={'auto'}
      slidesPerView={4}
      slidesPerGroup={4}
      // spaceBetween={width < 480 ? 0 : 16}
      loop={true}
      pagination={true}
      modules={[Pagination, Navigation, A11y]}
      className="expertsSwiper">
      {expertsSlideS.map((expert, index) =>
        <SwiperSlide key={index}>
          <ExpertCard name={expert.name} src={expert.src} desc={expert.desc} color={expert.color} />
        </SwiperSlide>
      )}
    </Swiper>}
    <RightSideLink text={'All TechLab teachers'} path={'/aboutschool#ourexperts'} isBlack isRightSided />
  </StyledExpertSectionWrap>)
}