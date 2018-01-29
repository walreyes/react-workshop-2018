import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MailItem from './MailItem';

const propTypes = {
  mails: PropTypes.array,
  toggleMail: PropTypes.func,
  toggleMailBookmark: PropTypes.func,
  toggleMailCheckbox: PropTypes.func
};

const defaultProps = {
  mails: [],
  toggleMail: () => {},
  toggleMailBookmark: () => {},
  toggleMailCheckbox: () => {}
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
              onCheck={this.props.toggleMailCheckbox}
              onBookmarkClick={this.props.toggleMailBookmark}
              onClick={this.props.toggleMail}
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
