import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import FlavorsPage from '../Pages/FlavorsPage/FlavorsPage';
import AboutPage from '../Pages/AboutPage/AboutPage';

const RoutesPage = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/flavors' element={<FlavorsPage />} />
            <Route path='/about' element={<AboutPage />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesPage;