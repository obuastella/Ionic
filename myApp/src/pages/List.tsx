import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import Settings from "./Settings";

const List: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">ui goes here</IonContent>
    </IonPage>
  );
};

export default List;
