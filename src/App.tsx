import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AdmissionPage from './pages/AdmissionPage';
import WhyDSTPage from './pages/WhyDSTPage';
import TrainerPage from './pages/TrainerPage';
import PlacementPage from './pages/PlacementPage';
import InfrastructurePage from './pages/InfrastructurePage';
import FAQsPage from './pages/FAQsPage';
import ContactPage from './pages/ContactPage';
import PartnershipsPage from './pages/PartnershipsPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/why-dst" element={<WhyDSTPage />} />
        <Route path="/trainer" element={<TrainerPage />} />
        <Route path="/placement" element={<PlacementPage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
