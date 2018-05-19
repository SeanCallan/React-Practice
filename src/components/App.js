import React from 'react';
import Header from './Header';

// creating the app component
class App extends React.Component {
  state = {
    pageHeader: 'Animal Names'
  };

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {/* page content here */}
        </div>
      </div>
    );
  }
};

export default App;
