import React from "react";
import { images } from "../../../assets/images.js"
import Header from "../../master-layout/header";
import Sidebar from "../../master-layout/sidebar";
import Counter from "../../master-layout/counter-block";
import DataTable from "../../master-layout/table";
import { Grid } from '@material-ui/core';


function Home() {

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">
        <Grid container className="custom-grid">
          <Grid item xs={12} sm={6} lg={3}>
            <Counter title="Desktop" value="1245" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Counter title="Audit Queries" value="3821" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Counter title="Queries" value="3654" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Counter title="Questionnaries" value="660" />
          </Grid>
        </Grid>

        <DataTable />
      </div>
    </>
  );
}

export default Home;
