import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import dummy from "../assets/dummy.png";
import Intro from "../components/intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro-seen";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    // this runs once when the component mounts
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);

  //   Handle Login
  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(e);
    await present({ message: "Logging in...", duration: 3000 });
    setTimeout(async () => {
      dismiss();
      // Some verification is supposed to be done here, that sends to the backend...
      router.push("/app", "root");
    }, 3000);
  };

  const finishIntro = async () => {
    console.log("FIN");
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };
  const seeIntroAgain = async () => {
    console.log("FIN");
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };
  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={"success"}>
              <IonTitle>My App</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent scrollY={false} className="ion-padding">
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <div className="ion-text-center ion-padding --border-radius">
                    <img src={dummy} alt="dummy-img" />
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
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
                  {/* To watch the intor again */}
                  <IonButton
                    fill="clear"
                    size="small"
                    color={"warning"}
                    className="ion-margin-top"
                    type="button"
                    expand="block"
                    onClick={seeIntroAgain}
                  >
                    Watch into Again
                    <IonIcon icon={personCircleOutline} slot="end" />
                  </IonButton>
                </form>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
