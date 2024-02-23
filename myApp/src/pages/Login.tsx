import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import dummy from "../assets/dummy.png";
import Intro from "../components/intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro-seen";

const Login: React.FC = () => {
  const [introSeen, setIntroSeen] = useState(false);
  const router = useIonRouter();

  useEffect(() => {
    // this runs once when the component mounts
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);

  //   Handle Login
  function handleLogin(e: any) {
    e.preventDefault();
    console.log(e);
    // router.push() --for the future
  }

  const finishIntro = async () => {
    console.log("FIN");
    Preferences.set({ key: INTRO_KEY, value: "true" });
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

          <IonContent scrollY={false}>
            <IonCard>
              <IonCardContent>
                <div className="ion-text-center ion-padding --border-radius">
                  <img src={dummy} alt="dummy-img" />
                </div>
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
