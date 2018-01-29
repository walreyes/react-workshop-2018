import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  placeholer: PropTypes.string,
  onKeyPressed: PropTypes.func
};

const defaultProps = {
  placeholder: 'Search...',
  onKeyPressed: inputValue => {
    inputValue;
  }
};

class SearchBox extends Component {
  onKeyPressed(e) {
    this.props.onKeyPressed(e.target.value);
  }

  render() {
    return (
      <div className="search-box">
        <input
          placeholder={this.props.placeholder}
          onKeyUp={this.onKeyPressed.bind(this)}
        />
        <span className="icon glyphicon glyphicon-search" />
      </div>
    );
  }
}

SearchBox.propTypes = propTypes;
SearchBox.defaultProps = defaultProps;

export default SearchBox;
