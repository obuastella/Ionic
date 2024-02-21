import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import dummy from "../assets/dummy.png";
import { logInOutline, personCircleOutline } from "ionicons/icons";

const Register: React.FC = () => {
  function handleSignUp(e: any) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonTitle>Creat Account</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>
        <IonCard>
          <IonCardContent>
            <div className="ion-text-center ion-padding --border-radius">
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
                Login
                <IonIcon icon={logInOutline} slot="end" />
              </IonButton>
              <IonButton
                routerLink="/register"
                color={"medium"}
                className="ion-margin-top"
                type="button"
                expand="block"
              >
                Create Account
                <IonIcon icon={personCircleOutline} slot="end" />
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
