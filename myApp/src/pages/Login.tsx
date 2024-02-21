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
        <IonToolbar>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>Test</IonContent>
      <IonFooter>
        <IonToolbar>Toolbar area</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Login;
