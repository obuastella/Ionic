import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>Test</IonContent>
    </IonPage>
  );
};

export default Login;
