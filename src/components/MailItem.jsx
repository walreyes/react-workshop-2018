import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  from: PropTypes.string,
  checked: PropTypes.bool,
  subject: PropTypes.string,
  datetime: PropTypes.string,
  bookmarked: PropTypes.bool,
  read: PropTypes.bool
};

const defaultProps = {
  from: '',
  subject: '',
  checked: false,
  bookmarked: false,
  read: false,
  datetime: ''
};

class MailItem extends Component {
  render() {
    const readClass = this.props.read ? 'read' : 'unread';
    const bookmarkedClass = this.props.bookmarked
      ? 'glyphicon-star yellow'
      : 'glyphicon-star-empty';

    return (
      <li className={readClass}>
        <div className="col col-1">
          <span className="dot" />
          <div className="checkbox-wrapper">
            <input type="checkbox" id="chk1" checked={this.props.checked} />
            <label for="chk1" className="toggle" />
          </div>
          <p className="title">{this.props.from}</p>
          <span className={`star-toggle glyphicon ${bookmarkedClass}`} />
        </div>
        <div className="col col-2">
          <div className="subject">{this.props.subject}</div>
          <div className="date">{this.props.datetime}</div>
        </div>
      </li>
    );
  }
}

MailItem.propTypes = propTypes;
MailItem.defaultProps = defaultProps;

export default MailItem;
