import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import Book from "./pages/Book/Book";
import AddBook from "./pages/AddBook/AddBook";
import UpdateBook from "./pages/UpdateBook/UpdateBook";
import Feature from "./pages/Feature/Feature";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";


import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/feature" element={<Feature/>} />
          <Route path="/books" element={<Books/>} />
          <Route exact path="/book/:id" element={<Book />} />
          <Route path="/addbook" element={<AddBook/> }/>
          <Route path="/updatebook/:id" element={<UpdateBook/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </AuthProvider>
    

 
  );
}

export default App;
