import React, { Component } from "react";
import "./sidebar.css"
import { images } from "../../../assets/images.js"
import { NavLink } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';
import { ButtonBase } from '@material-ui/core';

const mainNav = [
  { link: 'home', title: 'Dashboard', img: images.dashboard.default, activeImg: images.dashboardActive.default },
  { link: 'innerpage', title: 'Folder', img: images.folder.default, activeImg: images.folderActive.default },
  { link: 'calendar', title: 'Calendar', img: images.calendar.default, activeImg: images.calendarActive.default },
  { link: 'analytics', title: 'Analytics', img: images.analytics.default, activeImg: images.analyticsActive.default },
  { link: 'account', title: 'Mailbox', img: images.accounts.default, activeImg: images.accountsActive.default }
];


class Sidebar extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = { top: 0 };
    this.renderThumb = this.renderThumb.bind(this);
  }

  renderThumb({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: `rgba(255,255,255,0.5)`,
      borderRadius: `20px`
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props} />
    );
  }

  render() {
    return (

      <aside className="main-navigation">
        <Scrollbars className="custom-scroll" renderThumbVertical={this.renderThumb}>
          <ul>
            {
              mainNav.map((item, i) =>
                <li key={i}>
                  <ButtonBase>
                    <NavLink to={`${process.env.PUBLIC_URL}/` + item.link} activeClassName="active" title={item.title} className="nav-item-link">
                      <em>
                        <img src={item.img} alt="" />
                        <img src={item.activeImg} alt="" className="ovarlap" />
                      </em>
                      {item.title}
                    </NavLink>
                  </ButtonBase>
                </li>
              )
            }

          </ul>
        </Scrollbars>
      </aside>
    );
  }
}

export default Sidebar;
