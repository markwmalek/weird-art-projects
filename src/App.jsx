import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Parrish from './pages/Parrish';
import Windows from './pages/Windows';
import Team from './pages/Team';
import EmailBanner from './components/EmailBanner';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parrish" element={<Parrish />} />
          <Route path="/windows" element={<Windows />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Layout>
      <EmailBanner />
    </Router>
  );
}

export default App;
