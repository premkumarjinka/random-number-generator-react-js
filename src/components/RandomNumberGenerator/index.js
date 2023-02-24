// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    const min = 0
    const max = 100
    const num = min + Math.ceil(Math.random() * max)
    this.setState({count: num})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number </h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onGenerate} type="button">
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
