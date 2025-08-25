import { SafeAreaView, Image } from "react-native";
import ViewFrase from './components/ViewFrase';
import ViewFraseUE from './components/ViewFraseUE';
import styles from './components/Styles';

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <Image style = {styles.logo}
      source={require('./assets/img_1.png')}></Image>
        <ViewFrase/>
        
    </SafeAreaView>
  );
}