import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Books from "./pages/Books/Books";
import AddBook from "./pages/AddBook/AddBook";
import UpdateBook from "./pages/UpdateBook/UpdateBook";
import "./styles.css"

function App() {
  return (
    
    <Router>
      <div className="App">
        {/* <Header /> */}

        <Routes>
          <Route exact path="/" element={<Books/>} />
          <Route path="/addbook" element={<AddBook/> }/>
          <Route path="/updatebook" element={<UpdateBook/>} />
        {/*   <Route exact path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compose" element={<Compose />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
 
  );
}

export default App;
