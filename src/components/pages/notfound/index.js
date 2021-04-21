import React from "react";
import Header from "../../master-layout/header";
import Sidebar from "../../master-layout/sidebar";
import { Link as RouterLink} from 'react-router-dom';
import { Button } from '@material-ui/core';

function NotFound() {

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="error-content">
          <div className="error-block">
            <h1>404</h1>
            <p>Page not found</p>
            {/* <Link to={`${process.env.PUBLIC_URL}/home`} className="btn btn-secondary">Back to dashboard</Link> */}
            <Button component={RouterLink} to={`${process.env.PUBLIC_URL}/home`} variant="contained" color="primary" disableElevation className="btn">Back to dashboard</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
