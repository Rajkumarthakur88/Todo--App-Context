import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <>

        <div className="container">
          <NavBar />
          <div className="to-do-container">
            <Form />
            <ListGroup />
          </div>


        </div>
      </>
    </GlobalProvider>
  );
}

export default App;
