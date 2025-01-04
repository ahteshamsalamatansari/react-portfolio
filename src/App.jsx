import Footer from "./components/Footer/Footer";
import Header from "./components/Home/Header";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
      <Header/>
      <Routing />
      </div>
      <Footer/>
    </div>
    
  );
};

export default App;
