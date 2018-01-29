import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string,
  mailTo: PropTypes.string,
  datetime: PropTypes.string,
  message: PropTypes.string
};

const defaultProps = {
  type: 'sent',
  mailTo: '- Missing Mail To Subject -',
  datetime: '- Missing Date Time -',
  message: '-'
};

class MailMessage extends Component {
  getFromToDiv() {
    const type = this.props.type;
    let div;
    if (type == 'sent') {
      div = (
        <div className="left">
          You
          <div className="arrow" />
          {this.props.mailTo}
        </div>
      );
    } else {
      div = (
        <div className="left">
          {this.props.mailTo}
          <div className="arrow" />
          You
        </div>
      );
    }

    return div;
  }

  getMessage() {
    return { __html: this.props.message };
  }

  render() {
    const fromToDiv = this.getFromToDiv();

    return (
      <li className={this.props.type}>
        <div className="details">
          {fromToDiv}
          <div className="right">{this.props.datetime}</div>
        </div>
        <div className="message" dangerouslySetInnerHTML={this.getMessage()} />
        <div className="tool-box">
          <a
            href="#"
            className="circle-icon small glyphicon glyphicon-share-alt"
          />
          <a
            href="#"
            className="circle-icon small red-hover glyphicon glyphicon-remove"
          />
          <a
            href="#"
            className="circle-icon small red-hover glyphicon glyphicon-flag"
          />
        </div>
      </li>
    );
  }
}

MailMessage.propTypes = propTypes;
MailMessage.defaultProps = defaultProps;

export default MailMessage;
