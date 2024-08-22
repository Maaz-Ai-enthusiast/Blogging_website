import "./App.css";
import Footer from "./components/header/Footer";
import FooterBottom from "./components/header/FooterBottom";
import Header from "./components/header/Header";
import Ads from "./components/header/mainbody/Adds";
import Bodysec from "./components/header/mainbody/Bodysec";
import PostCon from "./components/header/mainbody/PostCon";

function App() {
  return (
    <>
      <Header />
      <Bodysec />
      <Ads/>
      <PostCon/>
      <Footer/>
      <FooterBottom/>
    </>
  );
}

export default App;
