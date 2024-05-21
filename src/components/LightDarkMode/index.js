// Write your code here
import React, {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  toggleMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className={`container ${modeClassName}`}>
        <h1 className="heading">Click To Change Mode</h1>
        <button className="button" onClick={this.toggleMode}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
