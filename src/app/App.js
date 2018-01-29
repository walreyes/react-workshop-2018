import React, { Component } from 'react';

import SearchBox from '../components/SearchBox';
import MailItem from '../components/MailItem';
import MailsList from '../components/MailsList';
import MailContent from '../components/MailContent';
import MailMessage from '../components/MailMessage';
import Sidebar from '../components/Sidebar';

import mailsDB from './MailsDB.json';
import MailsHandler from './MailsHandler';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mails: mailsDB,
      isMailOpened: false,
      openedMailId: null,
      filteredMails: mailsDB
    };
  }

  toggleMail(mailId) {
    // If maildId is opened then close and finish
    if (this.state.openedMailId == mailId) {
      this.closeMail();
    } else {
      // If mailId is not opened then open it.
      // If new mail id, is not read mark it as read.
      const newMails = MailsHandler.markMailAsRead(this.state.mails, mailId);

      this.setState({
        isMailOpened: true,
        openedMailId: mailId,
        mails: newMails
      });
    }
  }

  closeMail() {
    this.setState({
      isMailOpened: false,
      openedMailId: null
    });
  }

  toggleMailCheckbox(mailId) {
    const newMails = MailsHandler.toggleMailChecked(this.state.mails, mailId);

    this.setState({
      mails: newMails
    });
  }

  toggleMailBookmark(mailId) {
    const newMails = MailsHandler.toggleMailBookmark(this.state.mails, mailId);

    this.setState({
      mails: newMails
    });
  }

  getOpenedMail() {
    if (this.state.isMailOpened) {
      let mail = MailsHandler.findMailById(
        this.state.mails,
        this.state.openedMailId
      );
      return (
        <MailContent
          opened={true}
          onBackClicked={this.closeMail.bind(this)}
          {...mail}
        />
      );
    }
  }

  searchMails(searchCriteria) {
    const mails = this.state.mails;
    let filteredMails;

    if (searchCriteria && searchCriteria != '') {
      filteredMails = MailsHandler.searchMails(mails, searchCriteria);
    } else {
      filteredMails = mails;
    }

    this.setState({
      filteredMails
    });
  }

  render() {
    const openedMail = this.getOpenedMail();

    return (
      <div>
        <Sidebar />
        <main id="main">
          <div className="overlay" />
          <header className="header">
            <SearchBox onKeyPressed={this.searchMails.bind(this)} />

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
                mails={this.state.filteredMails}
                toggleMail={this.toggleMail.bind(this)}
                toggleMailBookmark={this.toggleMailBookmark.bind(this)}
                toggleMailCheckbox={this.toggleMailCheckbox.bind(this)}
              />

              <a href="#" className="load-more-link">
                Show more messages
              </a>
            </div>
          </div>
        </main>

        {openedMail}
      </div>
    );
  }
}

export default App;
