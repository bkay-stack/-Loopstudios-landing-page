import Showcase from "./componet/article-1/Showcase";
import PictureGrid from "./componet/creation/PictureGrid";
import Footer from "./componet/footer/Footer";
import Header from "./componet/header/Header";
function App() {
  return (
    <div className="container">
      <Header />
      <Showcase />
      <PictureGrid />
      <Footer />
    </div>
  );
}

export default App;
