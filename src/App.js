import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Success from './Pages/Success';
import Error from './Pages/Error';
import ProtectedRoute from './Comp/ProtectedRoute';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<ProtectedRoute element={<Success />} />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
