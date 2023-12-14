import { Link, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';


import { useEffect, useState } from "react"
import { useAppCtx } from "../utils/AppProvider"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-light p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-light mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h6>&copy; {new Date().getFullYear()} - Holly Thompson, Tim Poffenberger, Franklin Bradley, MJ Cabellero</h6>
      </div>
    </footer>
  );
};

export default Footer;