import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Introsvg1 from "../assets/intro/1.svg";
import Introsvg2 from "../assets/intro/2.svg";
import Introsvg3 from "../assets/intro/3.svg";
import "./intro.css";
interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};
const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={Introsvg1} alt="Intro 1" width={"50%"} />
        <IonText>
          <h3>Build Awesome UI with ionic UI Components!</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Introsvg2} alt="Intro 2" width={"50%"} />
        <IonText>
          <h3>Build Awesome UI with ionic UI Components!</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Introsvg3} alt="Intro 3" width={"50%"} />
        <IonText>
          <h3>Build Awesome UI with ionic UI Components!</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Finish</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
