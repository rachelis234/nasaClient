import "./App.css";
import { useEffect } from "react";
import MyRouter from "./components/MyRouter";
import { Provider } from "react-redux";
import Store from "./Redux/Store/Store";
// import UploadPicture from "./components/uploadPicture/UploadPicture";
import ImageUpload from "./components/uploadPicture/UploadPicture";
import Nvbar from "./components/nvBar/NvBar";

function App() {
  useEffect(() => {
    document.title = `AstronomImage`;
  });
  return (
    <Provider store={Store}>
      <div className="App h-100">
        {/* <BootstrapNavbar /> */}
        {/* <ImageUpload /> */}
        <Nvbar />
      </div>
    </Provider>
  );
}

export default App;
