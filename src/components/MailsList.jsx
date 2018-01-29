import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MailItem from './MailItem';

const propTypes = {
  mails: PropTypes.array.optional
};

const defaultProps = {
  mails: []
};

class MailsList extends Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.mails.map((mail, i) => <MailItem {...mail} key={i} />)}
      </ul>
    );
  }
}

MailsList.propTypes = propTypes;
MailsList.defaultProps = defaultProps;

export default MailsList;
