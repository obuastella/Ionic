import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Login: React.FC = () => {
  function handleLogin(e: any) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <form onSubmit={handleLogin}>
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
                className="ion-margin-top"
                type="submit"
                expand="block"
              >
                Login
              </IonButton>
              <IonButton
                routerLink="/register"
                color={"medium"}
                className="ion-margin-top"
                type="button"
                expand="block"
              >
                Create Account
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
