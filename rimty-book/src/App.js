import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import AddBook from "./pages/AddBook/AddBook";
import UpdateBook from "./pages/UpdateBook/UpdateBook";
import "./styles.css"

function App() {
  return (
    
    <Router>
      <div className="App">
        <Header />

        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/addbook" element={<AddBook/> }/>
          <Route path="/updatebook/:id" element={<UpdateBook/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
 
  );
}

export default App;
