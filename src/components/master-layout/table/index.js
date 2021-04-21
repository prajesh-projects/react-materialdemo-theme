import React from "react";
// import { InputGroup, FormControl, Form, Table } from 'react-bootstrap'
import { images } from "../../../assets/images.js"
import { TextField, InputAdornment, IconButton, Select, FormControl, MenuItem, TableContainer, Table, TableHead, TableRow, TableCell, Button } from '@material-ui/core';

const dataTable = [
  { name: 'Jane Smith ', task: 'Lorem ipsum is dummy text', role: 'Administrator', status: 'Active', statusClass: '' },
  { name: 'Jane Smith ', task: 'Lorem ipsum is dummy text', role: 'Administrator', status: 'Active', statusClass: '' },
  { name: 'Jane Smith ', task: 'Lorem ipsum is dummy text', role: 'Administrator', status: 'Active', statusClass: '' },
  { name: 'Jane Smith ', task: 'Lorem ipsum is dummy text', role: 'Administrator', status: 'Active', statusClass: '' },
  { name: 'Jane Smith ', task: 'Lorem ipsum is dummy text', role: 'Administrator', status: 'Active', statusClass: '' },
  { name: 'Jane Smith ', task: 'Lorem ipsum is dummy text', role: 'Administrator', status: 'Inactive', statusClass: 'danger' },
  { name: 'Jane Smith ', task: 'Lorem ipsum is dummy text', role: 'Administrator', status: 'Inactive', statusClass: 'danger' },
  { name: 'Jane Smith ', task: 'Lorem ipsum is dummy text', role: 'Administrator', status: 'Inactive', statusClass: 'danger' },
  { name: 'Jane Smith ', task: 'Lorem ipsum is dummy text', role: 'Administrator', status: 'Inactive', statusClass: 'danger' },
  { name: 'Jane Smith ', task: 'Lorem ipsum is dummy text', role: 'Administrator', status: 'Inactive', statusClass: 'danger' },
];

function DataTable() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="table-sorting-block">
        <div className="left-block">
          <TextField
            className="search-input form-control"
            id="input-with-icon-textfield"
            placeholder="Search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton className="btn"><img src={images.search.default} alt="" /></IconButton >
                </InputAdornment>
              ),
            }}
          />

          <FormControl className="sorting-select m-0">
            <label>Sort:</label>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              IconComponent={props => (
                <em {...props}>
                  <img src={images.dropArrow.default} alt="" />
                </em>
              )}
            >
              <MenuItem value="">
                <em>New</em>
              </MenuItem>
              <MenuItem value={2}>1</MenuItem>
              <MenuItem value={3}>2</MenuItem>
              <MenuItem value={4}>3</MenuItem>
              <MenuItem value={5}>4</MenuItem>
            </Select>
          </FormControl>

        </div>
        <div className="right-block">
          <IconButton className="btn add-btn"></IconButton >
        </div>
      </div>
      <div className="table-block">
        <div className="table-header">
          <h4 className="p-0">Customers</h4>
          <span className="page-value">1-10 of 30</span>
        </div>
        <TableContainer>
          <Table className="table" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Task</TableCell>
                <TableCell>Role</TableCell>
                <TableCell className="text-center">Status</TableCell>
                <TableCell width="100">Actions</TableCell >
              </TableRow>
            </TableHead>
            <tbody>
              {
                dataTable.map((item,i) =>
                  <TableRow key={i}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.task}</TableCell>
                    <TableCell>{item.role}</TableCell>
                    <TableCell className="text-center">
                      <div className={"status-badge " + item.statusClass}>
                        {item.status}
                      </div>
                    </TableCell>
                    <TableCell width="100">
                      <div className="action-btns">
                        <a href="javascript:void(0)" title="Edit" className="action-btn">
                          <img src={images.edit.default} alt="" />
                        </a>
                        <a href="javascript:void(0)" title="Delete" className="action-btn">
                          <img src={images.delete.default} alt="" />
                        </a>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              }
            </tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default DataTable;
