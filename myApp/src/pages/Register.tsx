import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRoute,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import dummy from "../assets/dummy.png";
import {
  checkmarkDoneOutline,
  logInOutline,
  personCircleOutline,
} from "ionicons/icons";

const Register: React.FC = () => {
  const router = useIonRouter();
  const handleSignUp = (e: any) => {
    e.preventDefault();
    console.log(e);
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonTitle>Creat Account</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>
        <IonCard>
          <IonCardContent>
            <div className="ion-text-center ion-padding ">
              <img src={dummy} alt="dummy-img" />
            </div>
            <form onSubmit={handleSignUp}>
              <IonInput
                label="Email"
                labelPlacement="floating"
                fill="outline"
                type="email"
                placeholder="johndoe@gmail.com"
              ></IonInput>
              <IonInput
                className="ion-margin-top"
                label="Password"
                labelPlacement="floating"
                fill="outline"
                type="password"
                placeholder="johndoe@gmail.com"
              ></IonInput>
              <IonButton
                routerLink="/"
                className="ion-margin-top"
                type="submit"
                expand="block"
              >
                Create My Account
                <IonIcon icon={checkmarkDoneOutline} slot="end" />
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
