import React, { useState } from "react";
import "./header.css"
// import Dropdown from 'react-bootstrap/Dropdown'
import { images } from "../../../assets/images.js"
import { Avatar, Badge, Menu, MenuItem, IconButton, ButtonBase, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';


const toggleMenu = () => {
  document.body.classList.toggle('show-menu');
  document.getElementById("hamburger").classList.toggle('is-active');
}

// window.onresize = function(event){
//   document.body.classList.remove('show-menu');
//   document.getElementById("hamburger").classList.remove('is-active');
// }

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header">
      <div className="left-header">
        <div class="hamburger" id="hamburger" onClick={toggleMenu}>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <a href="#/" className="logo"><img src={images.logo.default} alt="" /></a>
      </div>

      <ul className="right-header">
        <li>
          <Badge badgeContent={2} color="primary" className="round-badge">
            <IconButton>
              <a href="javascript:void(0)" title="Notification" className="link-icon">
                <img src={images.notification.default} alt="" />
                {/* <span className="round-badge">2</span> */}
              </a>
            </IconButton>
          </Badge>
        </li>
        <li>
          <Badge badgeContent={2} color="primary" className="round-badge">
            <IconButton>
              <a href="javascript:void(0)" title="Inbox" className="link-icon">
                <img src={images.message.default} alt="" />
                {/* <span className="round-badge">2</span> */}
              </a>
            </IconButton>
          </Badge>
        </li>
        <li>
          <Button>


            <a href="#" title="John Smith" className="profile-block" onClick={handleClick}>
              {/* <em className="dp"><img src={images.dp.default} alt="" /></em> */}
              <Avatar alt="" src={images.dp.default} className="dp" />
              <span className="username">John Smith</span>
            </a>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="profile-menu"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            PaperProps={{
              style: {
                maxHeight: '150px',
                width: '150px',
              },
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem component={RouterLink} onClick={handleClose} to={`${process.env.PUBLIC_URL}/`}>Logout</MenuItem>
          </Menu>
        </li>
      </ul>
    </header>
  );
}

export default Header;
