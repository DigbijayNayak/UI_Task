import {
  IonCard,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonText,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  batteryChargingOutline,
  batteryChargingSharp,
  bicycleOutline,
  bicycleSharp,
  buildOutline,
  heart,
  homeOutline,
  homeSharp,
  notificationsOutline,
  notificationsSharp,
  peopleOutline,
  peopleSharp,
  statsChartOutline,
  timeOutline,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Dashboard",
    url: "/page/Dashboard",
    iosIcon: homeOutline,
    mdIcon: homeOutline,
  },
  {
    title: "Driver",
    url: "/page/Driver",
    iosIcon: peopleOutline,
    mdIcon: peopleOutline,
  },
  {
    title: "Ebike",
    url: "/page/Ebike",
    iosIcon: bicycleOutline,
    mdIcon: bicycleOutline,
  },
  {
    title: "Charging Station",
    url: "/page/Charging Station",
    iosIcon: batteryChargingOutline,
    mdIcon: batteryChargingOutline,
  },
  {
    title: "Trip History",
    url: "/page/Trip History",
    iosIcon: timeOutline,
    mdIcon: timeOutline,
  },
  {
    title: "Notification",
    url: "/page/Notification",
    iosIcon: notificationsOutline,
    mdIcon: notificationsOutline,
  },
  {
    title: "Maintenance",
    url: "/page/Maintenance",
    iosIcon: buildOutline,
    mdIcon: buildOutline,
  },
  {
    title: "Stats & Reports",
    url: "/page/Stats & Reports",
    iosIcon: statsChartOutline,
    mdIcon: statsChartOutline,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" style={{width:"100px"}}>
      <IonContent>
        <IonGrid>
          {/* <IonList id="inbox-list"> */}
          <IonListHeader style={{ margin: "auto", color: "#3880ff" }}>
            Indiglo
          </IonListHeader>
          <IonNote style={{ marginRight: "auto" }}>Mobility</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          {/* </IonList> */}
        </IonGrid>

        <IonText id="ftitle" style={{position:"absolute", bottom:"10px", margin:"auto"}}>
          Indigo Admin Dashboard
          <br />
          Made with <IonIcon icon={heart}></IonIcon> by PeopleTech Designers
        </IonText>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
