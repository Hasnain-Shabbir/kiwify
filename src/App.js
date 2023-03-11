import { Route, Routes } from 'react-router';
import Register from './pages/Register';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
