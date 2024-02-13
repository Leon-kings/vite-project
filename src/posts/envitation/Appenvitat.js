import Couple from "./component/Couple";
import Galery from "./component/Galery";
import Guest from "./component/Guest";
import Home from "./component/Home";
import Info from "./component/Info";
import Story from "./component/Story";
function App() {
  return (<>
    <div className="App">
      <Home />
      <Couple />
      <Info />
      <Story />
      <Galery />
      <Guest />
    </div>
    </>
  );
}

export default App;
