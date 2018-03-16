import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
	createList = (filter) => {
		return this.props.data.filter(function(proj){
			if (filter === 'all') return true;
			return proj.solo === filter;
		})
	}
	render(){
		const { filter } = this.props;
		const newList = this.createList(filter);
		return (
			<div className='projects-list'>
				{newList.map(function(proj){
  					return <Project name={proj.projectName} value={proj.solo}/>
				})}
			</div>
		);
	}
}

export default Projects;