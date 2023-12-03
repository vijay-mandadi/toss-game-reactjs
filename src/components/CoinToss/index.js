// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {side: false, count: 0, headCount: 0, tailCount: 0}

  change = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prev => ({
        side: false,
        count: prev.count + 1,
        headCount: prev.headCount + 1,
      }))
    } else {
      this.setState(prev => ({
        side: true,
        count: prev.count + 1,
        tailCount: prev.tailCount + 1,
      }))
    }
  }

  render() {
    const {side, count, headCount, tailCount} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          {side ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          )}
          <button type="button" onClick={this.change}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {count}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
