import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import MailContent from '../components/MailContent';
class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <MailContent />
      </div>
    );
  }
}

export default App;
