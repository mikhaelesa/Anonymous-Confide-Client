import { GlobalStyle } from "components/atoms";
import ViewportProvider from "contexts/viewport";
import { ToastContainer } from "react-toastify";
import { LandingRouter } from "routes";
import "./styles/react-toastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        autoClose={3000}
        limit={3}
        position="bottom-left"
        draggable={false}
        newestOnTop={true}
      />
      <GlobalStyle />
      <ViewportProvider>
        <LandingRouter />
      </ViewportProvider>
    </div>
  );
}

export default App;
