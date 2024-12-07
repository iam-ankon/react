import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-bold">Inquiry Management</h1>
        <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/inquiries/i" className="hover:underline">Inquiries</Link>
        </div>
    </nav>
);

export default Navbar;
