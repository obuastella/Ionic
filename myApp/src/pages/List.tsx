import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonListHeader,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  IonicSlides,
  useIonAlert,
  useIonToast,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { Redirect, Route } from "react-router";
import Settings from "./Settings";
import { addOutline, trashBinOutline } from "ionicons/icons";

const List: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [users, setUsers] = useState<any[]>([]);
  const [showAlert] = useIonAlert();
  const [showToast] = useIonToast();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const modal = useRef<HTMLIonModalElement>(null);
  const cardModal = useRef<HTMLIonModalElement>(null);
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);
  const page = useRef(null);
  const [activeSegment, setActiveSegment] = useState<any>("details");
  useEffect(() => {
    setPresentingElement(page.current);
  }, []);
  // Works like useEffect hook
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

  const clearList = () => {
    showAlert({
      header: "Confirm!",
      message: "Are you sure you want to remove all users",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Delete",
          handler: () => {
            setUsers([]);
            showToast({
              message: "Users have been deleted",
              duration: 2000,
              color: "danger",
            });
          },
        },
      ],
    });
  };

  const doRefresh = async (event: any) => {
    const data = await getUsers();
    setUsers(data);
    event.detail.complete();
  };
  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>

          <IonTitle>List</IonTitle>
          <IonButtons slot="end" onClick={clearList}>
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
        {/* To refresh the page */}
        <IonRefresher slot="fixed" onIonRefresh={(ev) => doRefresh(ev)}>
          <IonRefresherContent />
        </IonRefresher>

        {/* Show Loading state ....Not working perfectly yet...*/}
        {loading && [
          ...Array(10).map((_, index) => (
            <IonCard key={index}>
              <IonCardContent class="ion-no-padding">
                <IonItem lines="none">
                  <IonAvatar slot="start">
                    <IonSkeletonText animated={true} />
                  </IonAvatar>
                  <IonLabel>
                    <IonSkeletonText
                      animated={true}
                      style={{ width: "150px" }}
                    />
                    <p>
                      <IonSkeletonText
                        animated={true}
                        style={{ width: "80px" }}
                      />
                    </p>
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          )),
        ]}

        {users.map((user, index) => (
          <IonCard key={index} onClick={() => setSelectedUser(user)}>
            <IonCardContent class="ion-no-padding">
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonImg src={user.picture.thumbnail} alt="" />
                </IonAvatar>
                <IonLabel>
                  {user.name.first} {user.name.last}
                  <p>{user.email}</p>
                </IonLabel>
                <IonChip slot="end">{user.nat}</IonChip>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}
        {/* Added modal */}
        <IonModal
          breakpoints={[0, 0.5, 0.8]}
          initialBreakpoint={0.5}
          ref={modal}
          isOpen={selectedUser !== null}
          onIonModalWillDismiss={() => setSelectedUser(null)}
        >
          <IonHeader>
            <IonToolbar color={"light"}>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  Cancel
                </IonButton>
                <IonTitle>
                  {selectedUser?.name.first} {selectedUser?.name.last}
                </IonTitle>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          {/* Added segment */}
          <IonToolbar color={"light"}>
            <IonSegment
              value={activeSegment}
              onIonChange={(e) => setActiveSegment(e.detail.value!)}
            >
              <IonSegmentButton value="details">Details</IonSegmentButton>
              <IonSegmentButton value="calendar">Calendar</IonSegmentButton>
            </IonSegment>
          </IonToolbar>
          <IonContent className="ion-padding">
            {activeSegment === "details" && (
              <IonCard>
                <IonAvatar slot="start">
                  <IonImg src={selectedUser?.picture.logo} />
                </IonAvatar>
                <IonCardContent className="ion-no-padding">
                  <IonItem lines="none">
                    <IonLabel className="ion-text-wrap">
                      {selectedUser?.name.first} {selectedUser?.name.last}
                      <p>{selectedUser?.email}</p>
                    </IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            )}
            {activeSegment === "calendar" && <IonDatetime></IonDatetime>}
          </IonContent>
        </IonModal>
      </IonContent>
      {/* New bottom Modal */}
      <IonModal
        ref={cardModal}
        trigger="card-modal"
        presentingElement={presentingElement!}
      >
        <IonHeader>
          <IonToolbar color={"success"}>
            <IonButtons slot="start">
              <IonButton onClick={() => cardModal.current?.dismiss()}>
                Cancel
              </IonButton>
              <IonTitle>Card Modal</IonTitle>
            </IonButtons>
          </IonToolbar>
          <IonContent>My Card Modal</IonContent>
        </IonHeader>
      </IonModal>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton id="card-modal">
          <IonIcon icon={addOutline} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default List;
