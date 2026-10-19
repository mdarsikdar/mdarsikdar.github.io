import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import ResearchPage from './pages/ResearchPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
