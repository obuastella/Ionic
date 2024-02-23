import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Route, Redirect } from "react-router";
import List from "./List";
import Settings from "./Settings";
import { homeOutline, newspaperOutline } from "ionicons/icons";

const Menu: React.FC = () => {
  // Creating paths for menu items
  const path = [
    { name: "Home", url: "/app/list", icons: homeOutline },
    { name: "Settings", url: "/app/settings", icons: newspaperOutline },
  ];
  return (
    <IonPage>
      {/* side bar */}
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color="secondary">Menu</IonToolbar>
          </IonHeader>
          <IonContent>
            {path.map((item, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  detail={false}
                  routerLink={item.url}
                  routerDirection="none"
                >
                  <IonIcon slot="start" icon={item.icons} />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route exact path="/app/list" component={List} />
          <Route exact path="/app/settings" component={Settings} />
          <Route exact path="/app">
            <Redirect to="/app/list" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
