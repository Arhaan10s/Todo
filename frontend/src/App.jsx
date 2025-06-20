import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import Header from './pages/Header';

function App() {
  return (
    
      <main>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </main>
    
  )
}

export default App;