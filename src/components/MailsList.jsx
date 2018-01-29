import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MailItem from './MailItem';

const propTypes = {
  mails: PropTypes.array.optional,
  openMail: PropTypes.func,
  bookmarkMail: PropTypes.func,
  checkMail: PropTypes.func
};

const defaultProps = {
  mails: [],
  openMail: () => {},
  bookmarkMail: () => {},
  checkMail: () => {}
};

class MailsList extends Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.mails.map((mail, i) => {
          return (
            <MailItem
              {...mail}
              key={i}
              onCheck={this.props.checkMail}
              onBookmarkClick={this.props.bookmarkMail}
              onClick={this.props.openMail}
            />
          );
        })}
      </ul>
    );
  }
}

MailsList.propTypes = propTypes;
MailsList.defaultProps = defaultProps;

export default MailsList;
