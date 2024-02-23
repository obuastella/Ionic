import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRoute,
  IonRow,
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
          <IonGrid fixed>
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                <div className="ion-text-center ion-padding ">
                  <img src={dummy} alt="dummy-img" />
                </div>
              </IonCol>
            </IonRow>
            {/*  */}
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                <IonCardContent>
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
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
