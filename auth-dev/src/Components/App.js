import AuthProvider from "./contexts/AuthContext";
import Singup from "./Singup";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <AuthProvider>
          <Container className="d-flex align-item-center justify-content-center"
          style={{maxHeight:"100vh"}}>
          <div className= "w-100" style={{maxWidth:"400px"}}>
          <Singup/>
          </div>
          </Container>
       
      </AuthProvider>
      
      
      
   
    </div>
  );
}

export default App;
