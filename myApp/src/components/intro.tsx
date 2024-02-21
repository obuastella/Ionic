import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ContainerProps {
  onFinish: () => void;
}

const Intro: React.FC<ContainerProps> = () => {
  return (
    <Swiper>
      <SwiperSlide>test</SwiperSlide>
      <SwiperSlide>asd</SwiperSlide>
    </Swiper>
  );
};

export default Intro;
