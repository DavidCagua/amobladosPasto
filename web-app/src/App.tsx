import "./App.css";
import {
  Button,
  Background,
  Card,
  Navbar,
} from "@amobladospastods/components/";
function App() {
  return (
    <Background>
      <Navbar />
      <Card
        location="centro"
        price={2}
        title="hola"
        src="https://a0.muscache.com/im/pictures/monet/Luxury-553449454187790697/original/475750f4-33de-4e1d-bbd7-f1939896ce9c?im_w=720"
      />
    </Background>
  );
}

export default App;
