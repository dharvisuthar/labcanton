import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
function App() {
  return (
   <div className="font-14 font-family-Roboto">
     <Header />
   <Home />
   <Footer/>
     </div>
  );
}

export default App;
