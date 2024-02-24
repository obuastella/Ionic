import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useState } from "react";
import { Redirect, Route } from "react-router";
import Settings from "./Settings";
import { trashBinOutline } from "ionicons/icons";

const List: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [users, setUsers] = useState<any[]>([]);

  // Works like useEffect
  useIonViewWillEnter(async () => {
    const users = await getUsers();
    setUsers(users);
    setLoading(false);
  });
  const getUsers = async () => {
    const data = await fetch("https://randomuser.me/api?results=10");
    const users = await data.json();
    return users;
  };

  const clearList = () => {};
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>

          <IonTitle>List</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={trashBinOutline} color="danger" />
              {/* <IonButtons>Clear</IonButtons> */}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">ui goes here</IonContent>
    </IonPage>
  );
};

export default List;
