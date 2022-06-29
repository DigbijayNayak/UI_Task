import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  notificationsCircleOutline,
  notificationsOutline,
  search,
} from "ionicons/icons";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";

interface Data {
  bikeNo: string;
  img: string;
  driver: string;
  location: string;
  weight: string;
  batteryStatus: String;
  status: string;
}

const data: Data[] = [
  {
    bikeNo: "IND-001-123456",
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&q=40",
    driver: "Samanta Wiliam",
    location: "Hitech City",
    weight: "4.45kg",
    batteryStatus: "91%",
    status: "Active",
  },
  {
    bikeNo: "IND-001-123645",
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&q=40",
    driver: "Jonas Red",
    location: "Hitech City",
    weight: "5.09kg",
    batteryStatus: "74%",
    status: "Inactive",
  },
  {
    bikeNo: "IND-001-125546",
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&q=40",
    driver: "Amara Vera",
    location: "Jubliee Hills",
    weight: "4.23kg",
    batteryStatus: "91%",
    status: "Active",
  },
  {
    bikeNo: "IND-001-123973",
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&q=40",
    driver: "Nella Vita",
    location: "Monikonda",
    weight: "1.45kg",
    batteryStatus: "34%",
    status: "Active",
  },
  {
    bikeNo: "IND-001-123645",
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&q=40",
    driver: "Jonas Red",
    location: "Hitech City",
    weight: "5.09kg",
    batteryStatus: "74%",
    status: "Inactive",
  },
  {
    bikeNo: "IND-001-125546",
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&q=40",
    driver: "Amara Vera",
    location: "Jubliee Hills",
    weight: "4.23kg",
    batteryStatus: "91%",
    status: "Active",
  },
  {
    bikeNo: "IND-001-123973",
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&q=40",
    driver: "Nella Vita",
    location: "Monikonda",
    weight: "1.45kg",
    batteryStatus: "34%",
    status: "Active",
  },
  {
    bikeNo: "IND-001-123645",
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&q=40",
    driver: "Jonas Red",
    location: "Hitech City",
    weight: "5.09kg",
    batteryStatus: "74%",
    status: "Inactive",
  },
  {
    bikeNo: "IND-001-125546",
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&q=40",
    driver: "Amara Vera",
    location: "Jubliee Hills",
    weight: "4.23kg",
    batteryStatus: "91%",
    status: "Active",
  },
  {
    bikeNo: "IND-001-123973",
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&q=40",
    driver: "Nella Vita",
    location: "Monikonda",
    weight: "1.45kg",
    batteryStatus: "34%",
    status: "Active",
  },
];

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      <IonContent fullscreen>
        <div
          style={{ marginBottom: "16px", marginLeft: "16px", display: "flex" }}
        >
          <IonSearchbar
            style={{ width: "700px" }}
            placeholder={"Search Driver or Ebike"}
          ></IonSearchbar>
          <IonIcon
            icon={notificationsCircleOutline}
            className={"notification"}
          ></IonIcon>
          <IonAvatar>
            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=30&q=30" />
          </IonAvatar>
          <IonButton>Logout</IonButton>
        </div>
        <ExploreContainer name={name} />

        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow style={{ color: "black" }}>
                <IonCol>E-bike Number</IonCol>
                <IonCol>Current Driver</IonCol>
                <IonCol>Location</IonCol>
                <IonCol>Weight</IonCol>
                <IonCol>Battery Status</IonCol>
                <IonCol>Status</IonCol>
              </IonRow>
              {data.map((Data, index) => {
                return (
                  <IonRow key={index}>
                    <IonCol>{Data.bikeNo}</IonCol>
                    <IonCol style={{ display: "flex" }}>
                      <IonAvatar>
                        <IonImg src={Data.img} />
                      </IonAvatar>
                      {Data.driver}
                    </IonCol>
                    <IonCol>{Data.location}</IonCol>
                    <IonCol>{Data.weight}</IonCol>
                    <IonCol>{Data.batteryStatus}</IonCol>
                    <IonCol>{Data.status}</IonCol>
                  </IonRow>
                );
              })}
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Page;
