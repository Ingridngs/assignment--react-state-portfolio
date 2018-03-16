import React, { Component } from 'react';
import ShowHideTech from './components/ShowHideTech'
import ProjectsContainer from './components/ProjectsContainer';

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <ShowHideTech />
      	<ProjectsContainer />
      </div>
    );
  }
}

export default App