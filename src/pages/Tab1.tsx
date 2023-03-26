import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Grocery List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Grocery List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Grocery List" />

      <IonList>
        <IonItemSliding>
          <IonItemOptions side="start">
            <IonItemOption color="success">Permanetly Save to List</IonItemOption>
          </IonItemOptions>

          <IonItem>
            <IonLabel>Strawberries, 1 case</IonLabel>
          </IonItem>

          <IonItemOptions>
            <IonItemOption>Mark As Done</IonItemOption>
            <IonItemOption color="danger">Remove</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItemOptions side="start">
            <IonItemOption color="success">Permanetly Save to List</IonItemOption>
          </IonItemOptions>

          <IonItem>
            <IonLabel>Eggs, 1 dozen</IonLabel>
          </IonItem>

          <IonItemOptions>
            <IonItemOption>Mark As Done</IonItemOption>
            <IonItemOption color="danger">Remove</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItemOptions side="start">
            <IonItemOption color="success">Archive</IonItemOption>
          </IonItemOptions>

          <IonItem>
            <IonLabel>Dog food, 1 bag</IonLabel>
          </IonItem>

          <IonItemOptions>
            <IonItemOption>Mark As Done</IonItemOption>
            <IonItemOption color="danger">Remove</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
