import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonSearchbar,
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
  // useIonViewWillEnter(async () => {
  //   const users = await getUsers();
  //   setUsers(users);
  //   setLoading(false);
  // });
  // added
  useIonViewWillEnter(() => {
    const fetchData = async () => {
      const users = await getUsers();
      setUsers(users);
      setLoading(false);
    };

    fetchData();
  });
  //
  const getUsers = async () => {
    const data = await fetch("https://randomuser.me/api?results=10");
    const users = await data.json();
    return users.results;
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
            </IonButton>
          </IonButtons>
        </IonToolbar>
        {/*  */}
        <IonToolbar color={"success"}>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {users.map((user, index) => (
          <IonCard key={index}>
            <IonCardContent class="ion-no-padding">
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonImg src={user.picture.thumbnail} alt="" />
                </IonAvatar>
                <IonLabel>
                  {user.name.first} {user.name.last}
                  <p>{user.email}</p>
                </IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default List;
