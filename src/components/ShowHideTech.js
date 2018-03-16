import React, { Component } from 'react';


/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear
 
*/

let techlistStatus = `techlist--hidden`

class ShowHideTech extends Component {
  constructor(){
    super()
    this.state = {
      isShown: false
    }
  }
  toggleTech = () => {
    if (this.state.isShown === false){
      techlistStatus = 'techlist--hidden'
    }else if(this.state.isShown === true){
      techlistStatus = ''
    }
    this.setState({
      isShown: !this.state.isShown
    })
  }
  render() {
    return (
      <section>
        <h4>Technologies</h4>
        <button className="toggle-techlist" onClick={this.toggleTech}>+ Show Tech</button>
        <div className={`techlist ${techlistStatus}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
        
      </section>
    );
  }
}

export default ShowHideTech;