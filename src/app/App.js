import React, { Component } from 'react';

import SearchBox from '../components/SearchBox';
import MailItem from '../components/MailItem';
import MailsList from '../components/MailsList';
import MailContent from '../components/MailContent';
import MailMessage from '../components/MailMessage';
import Sidebar from '../components/Sidebar';

import mailsDB from './MailsDB.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mails: mailsDB,
      mailOpened: false,
      openedMailId: null
    };
  }

  openMail(mailId) {
    console.log(`mail clicked: ${mailId}`);
  }

  checkMail(mailId) {
    console.log(`mail toggle check: ${mailId}`);
  }

  bookmarkMail(mailId) {
    console.log(`mail bookmark: ${mailId}`);
  }

  render() {
    return (
      <div>
        <Sidebar />
        <main id="main">
          <div className="overlay" />
          <header className="header">
            <SearchBox />

            <h1 className="page-title">
              <a className="sidebar-toggle-btn trigger-toggle-sidebar">
                <span className="line" />
                <span className="line" />
                <span className="line" />
                <span className="line line-angle1" />
                <span className="line line-angle2" />
              </a>Inbox<a>
                <span className="icon glyphicon glyphicon-chevron-down" />
              </a>
            </h1>
          </header>

          <div id="main-nano-wrapper" className="nano">
            <div className="nano-content">
              <MailsList
                mails={this.state.mails}
                openMail={this.openMail}
                bookmarkMail={this.bookmarkMail}
                checkMail={this.checkMail}
              />

              <a href="#" className="load-more-link">
                Show more messages
              </a>
            </div>
          </div>
        </main>
        <MailContent />
      </div>
    );
  }
}

export default App;
