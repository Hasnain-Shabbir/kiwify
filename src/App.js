import { Route, Routes } from 'react-router';
import { Register, Login } from './pages';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
