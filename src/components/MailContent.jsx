import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MailMessage from './MailMessage';

const propTypes = {
  from: PropTypes.string,
  opened: PropTypes.bool,
  mailContent: PropTypes.string,
  datetime: PropTypes.string,
  onBackClicked: PropTypes.func,
  subject: PropTypes.string
};

const defaultProps = {
  from: '',
  opened: false,
  mailContent: '',
  datetime: '',
  onBackClicked: () => {},
  subject: ''
};

class MailContent extends Component {
  render() {
    const openClass = this.props.opened ? 'opened' : 'closed';

    return (
      <div id="message" className={openClass}>
        <div className="header">
          <h1 className="page-title">
            <a
              onClick={this.props.onBackClicked}
              className="icon circle-icon glyphicon glyphicon-chevron-left trigger-message-close"
            />
            {this.props.subject}
          </h1>
          <p>
            From <a href="#">{this.props.from}</a> on{' '}
            <a href="#">{this.props.datetime}</a>.
          </p>
        </div>
        <div id="message-nano-wrapper" className="nano">
          <div className="nano-content">
            <ul className="message-container">
              <MailMessage
                type="received"
                mailTo={this.props.from}
                message={this.props.mailContent}
                datetime={this.props.datetime}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

MailContent.propTypes = propTypes;
MailContent.defaultProps = defaultProps;

export default MailContent;
