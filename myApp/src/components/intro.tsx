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
import Introsvg1 from "../assets/intro/1.svg";
import Introsvg2 from "../assets/intro/1.svg";
import Introsvg3 from "../assets/intro/1.svg";
interface ContainerProps {
  onFinish: () => void;
}

const Intro: React.FC<ContainerProps> = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={Introsvg1} alt="Intro 1" width={"50%"} />
      </SwiperSlide>
      <SwiperSlide>asd</SwiperSlide>
    </Swiper>
  );
};

export default Intro;
