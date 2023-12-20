import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/Gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compose" element={<Compose />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
 
  );
}

export default App;
