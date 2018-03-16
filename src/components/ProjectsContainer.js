import React, { Component } from 'react';
import Projects from './Projects';
import data from '../data/data';

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */

class ProjectsContainer extends Component {
  constructor(){
    super();
    this.state = {
      data,
      filter: 'all'
    };
  }
  filterProjects = (filter) => {
    this.setState({
      filter
    });
  }
  render() {
    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" 
              className={this.state.filter === 'all' ? 'project-type project-type--all project-type--selected' : 'project-type project-type--all'} 
              onClick={()=>{this.filterProjects('all')}}>All
            </span>

            <span data-ptype="solo" 
              className={this.state.filter === true ? 'project-type project-type--solo project-type--selected' : 'project-type project-type--solo'}
              onClick={()=>{this.filterProjects(true)}}>
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" 
              className={this.state.filter === false ? 'project-type project-type--team project-type--selected' : 'project-type project-type--team'} 
              onClick={()=>{this.filterProjects(false)}}>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <Projects data={this.state.data} filter={this.state.filter}/>

        </section>

    );
  }
}

export default ProjectsContainer;