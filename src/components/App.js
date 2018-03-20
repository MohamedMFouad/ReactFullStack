import React from 'react';
import Header from './Header';
import ContestsPreview from './ContestsPreview'

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount() {
    // timers, listeners
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contests.map(contest =>
            <ContestsPreview {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
