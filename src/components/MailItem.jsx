import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number,
  from: PropTypes.string,
  checked: PropTypes.bool,
  subject: PropTypes.string,
  datetime: PropTypes.string,
  bookmarked: PropTypes.bool,
  read: PropTypes.bool,
  onClick: PropTypes.func,
  onCheck: PropTypes.func,
  onBookmarkClick: PropTypes.func
};

const defaultProps = {
  id: -1,
  from: '',
  subject: '',
  checked: false,
  bookmarked: false,
  read: false,
  datetime: '',
  onClick: () => {},
  onBookmarkClick: () => {},
  onCheck: () => {}
};

class MailItem extends Component {
  onCheck(e) {
    e.stopPropagation();
    this.props.onCheck(this.props.id);
  }

  onBookmarkClick(e) {
    e.stopPropagation();
    this.props.onBookmarkClick(this.props.id);
  }

  onClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    const readClass = this.props.read ? 'read' : 'unread';
    const bookmarkedClass = this.props.bookmarked
      ? 'glyphicon-star yellow'
      : 'glyphicon-star-empty';

    return (
      <li className={readClass} onClick={this.onClick.bind(this)}>
        <div className="col col-1">
          <span className="dot" />
          <div className="checkbox-wrapper" onClick={this.onCheck.bind(this)}>
            <input type="checkbox" checked={this.props.checked} />

            <label for="chk1" className="toggle" />
          </div>
          <p className="title">{this.props.from}</p>
          <span
            onClick={this.onBookmarkClick.bind(this)}
            className={`star-toggle glyphicon ${bookmarkedClass}`}
          />
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
