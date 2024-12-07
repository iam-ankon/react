import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import InquiryAddPage from './pages/InquiryAddPage';
import InquiryDetailPage from './pages/InquiryDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import InquiryShortdetailPage from './pages/InquiryShortdetailPage';
import InquiryDetail from "./components/InquiryDetail";

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<InquiryAddPage />} />
            {/* <Route path="/inquiries" element={<InquiryListPage />} /> */}
            <Route path="/inquiries/:id" element={<InquiryDetailPage />} />
            <Route path="/inquiries/i" element={<InquiryShortdetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/inquiries/:id" element={<InquiryDetail />} />
        </Routes>
    </Router>
);

export default App;
