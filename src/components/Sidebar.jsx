import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class Sidebar extends Component {
  render() {
    return (
      <aside id="sidebar" className="nano">
        <div className="nano-content">
          <div className="logo-container">
            <span className="logo glyphicon glyphicon-envelope" />Mail
          </div>
          <a className="compose-button">Compose</a>
          <menu className="menu-segment">
            <ul>
              <li className="active">
                <a href="#">
                  Inbox<span> (43)</span>
                </a>
              </li>
              <li>
                <a href="#">Important</a>
              </li>
              <li>
                <a href="#">Sent</a>
              </li>
              <li>
                <a href="#">Drafts</a>
              </li>
              <li>
                <a href="#">Trash</a>
              </li>
            </ul>
          </menu>
          <div className="separator" />
          <div className="menu-segment">
            <ul className="labels">
              <li className="title">
                Labels <span className="icon">+</span>
              </li>
              <li>
                <a href="#">
                  Dribbble <span className="ball pink" />
                </a>
              </li>
              <li>
                <a href="#">
                  Roommates <span className="ball green" />
                </a>
              </li>
              <li>
                <a href="#">
                  Bills <span className="ball blue" />
                </a>
              </li>
            </ul>
          </div>
          <div className="separator" />
          <div className="menu-segment">
            <ul className="chat">
              <li className="title">
                Chat <span className="icon">+</span>
              </li>
              <li>
                <a href="#">
                  <span className="ball green" />Laura Turner
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ball green" />Kevin Jones
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ball blue" />John King
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ball blue" />Jenny Parker
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ball blue" />Paul Green
                </a>
              </li>
              <li>
                <a href="#" className="italic-link">
                  See offline list
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-padding" />
        </div>
      </aside>
    );
  }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
