import React, { useState } from "react";
import { images } from "../../../assets/images.js"
// import { Card, Row, Col, Form, Button } from 'react-bootstrap'
// import { Select } from 'react-slct/dist';
// import styled, { createGlobalStyle } from 'styled-components';
import Header from "../../master-layout/header";
import Sidebar from "../../master-layout/sidebar";
import DataTable from "../../master-layout/table";
import { Card, CardHeader, CardContent, Grid, TextField, InputLabel, Radio, RadioGroup, FormControlLabel, FormControl, Checkbox, Button } from '@material-ui/core';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';




class Innerpage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: '',
      radiovalue: 'Option2',
    }
  }

  // const [value, setValue] = useState('female');

  handleRadioChange = (event) => {
    //setValue(event.target.value);
    this.setState({ radiovalue: event.target.value });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <>
        <Header />
        <Sidebar />
        <div className="main-content">
          <Card className="primary-card">
            <CardHeader
              title={<h4 className="p-0">Form Elements</h4>}
            />
            <CardContent >
              <Grid container className="custom-grid">
                <Grid item xs={12} sm={6}>
                  <div className="form-group">
                    <InputLabel className="form-label" >First Name</InputLabel>
                    <TextField
                      className=""
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="form-group">
                    <InputLabel className="form-label" >Last Name</InputLabel>
                    <TextField
                      className=""
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="form-group">
                    <InputLabel className="form-label" >City</InputLabel>
                    <Select
                      value={selectedOption}
                      className="single-select"
                      onChange={this.handleChange}
                      clearable={false}
                      options={[
                        { value: 'City1', label: 'City1' },
                        { value: 'City2', label: 'City2' },
                      ]}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="form-group">
                    <InputLabel className="form-label" >State</InputLabel>
                    <Select
                      value={selectedOption}
                      className="single-select"
                      onChange={this.handleChange}
                      clearable={false}
                      options={[
                        { value: 'State1', label: 'State1' },
                        { value: 'State2', label: 'State2' },
                      ]}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="form-group">
                    <InputLabel className="form-label" >Radio Button</InputLabel>
                    <RadioGroup aria-label="gender" name="gender1" className="inline-control" value={this.radiovalue} onChange={this.handleRadioChange}>
                      <FormControlLabel
                        value="Option1"
                        control={<Radio
                          className="custom-radio"  
                          checkedIcon={<span className="checked-radio" />}
                          icon={<span className="unchecked-radio" />}
                        />}
                        label="Option1" />
                      <FormControlLabel value="Option2" control={<Radio className="custom-radio" />} label="Option2" />
                      <FormControlLabel value="Option3" control={<Radio className="custom-radio" />} label="Option3" />
                      <FormControlLabel value="Option4" disabled control={<Radio className="custom-radio" />} label="(Disabled Option4)" />
                    </RadioGroup>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="form-group">
                    <InputLabel className="form-label" >Checkbox</InputLabel>
                    <div className='inline-control'>
                      <FormControlLabel
                        control={<Checkbox
                          className="custom-checkbox"
                          defaultChecked
                          checkedIcon={<span className="unchecked checked" />}
                          icon={<span className="unchecked" />}
                        />}
                        label="Option1"
                      />
                      <FormControlLabel
                        control={<Checkbox
                          className="custom-checkbox"
                          checkedIcon={<span className="unchecked checked" />}
                          icon={<span className="unchecked" />}
                        />}
                        label="Option2"
                      />
                      <FormControlLabel
                        control={<Checkbox
                          className="custom-checkbox"
                          checkedIcon={<span className="unchecked checked" />}
                          icon={<span className="unchecked" />}
                        />}
                        label="Option3"
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="form-group">
                    <InputLabel className="form-label d-block" >Upload Image</InputLabel>
                    <div className="custom-file">
                      <input type="file" className="custom-file-control" />
                      <div className="custom-file-layout">
                        <em><img src={images.cloud.default} alt="" /></em>
                        <span>Browse image or drag a image here</span>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="btns-block">
                    <Button variant="contained" color="primary" className="btn" disableElevation>Submit</Button>
                    <Button variant="contained" className="btn" color="secondary" disableElevation>Cancel</Button>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <DataTable />
        </div>
      </>
    );
  }
}

export default Innerpage;
