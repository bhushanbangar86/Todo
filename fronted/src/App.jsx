import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import RouterProvider from "./components/routerProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterProvider></RouterProvider>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
