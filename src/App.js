import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import the components into App.js and compose them together in the return block
import NavigationBar from './components/navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Create from './components/Create';
import Read from './components/Read';
import Edit from './components/edit';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/*add routing logic. Each route will display a different component when its respective link is clicked*/}
        {/*Client side routing allows my app to update the URL from a link click without making another request for another document from the server. */}
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Read></Read>} />
        <Route path="/create" element={<Create></Create>} />
        {/*The route allows users to navigate to the Edit component when they want to edit a specific movie.*/}
        <Route path="/edit/:id" element={<Edit></Edit>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;