import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import Register from "./components/Register";
import Display from "./components/Display";
import AuthWrapper from "./components/AuthWrapper";

const App = () => {
  return (
    <>
    <Toaster/>
    <AuthWrapper>
      <Display/>
    </AuthWrapper>
    </>
  )
}

export default App;