import { useState } from "react";
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css'
import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
import 'admin-lte/plugins/jqvmap/jqvmap.min.css'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
import 'admin-lte/plugins/daterangepicker/daterangepicker.css'
import 'admin-lte/plugins/summernote/summernote-bs4.min.css'
import 'admin-lte/dist/js/adminlte.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'admin-lte/plugins/sparklines/sparkline.js'
import 'admin-lte/plugins/moment/moment.min.js'
import 'admin-lte/plugins/daterangepicker/daterangepicker.js'
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js'



import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";



function App() {
  const member_id = localStorage.getItem('member_id')

  if(!member_id){
    return <LoginPage/>
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
