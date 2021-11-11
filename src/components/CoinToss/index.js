// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    coinSide: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',

    headsValue: 0,
    tailsValue: 0,
  }

  onChangeCoin = () => {
    const {headsValue, tailsValue} = this.state
    const toss = Math.floor(Math.random() * 2)

    let tossFace = ''
    let latestHeadsCount = headsValue
    let latestTailsCount = tailsValue

    if (toss === 0) {
      tossFace = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      latestHeadsCount += 1
    } else {
      tossFace = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      latestTailsCount += 1
    }

    this.setState({
      coinSide: tossFace,
      headsValue: latestHeadsCount,
      tailsValue: latestTailsCount,
    })
  }

  render() {
    const {coinSide, headsValue, tailsValue} = this.state
    const totalValue = headsValue + tailsValue

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={coinSide} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onChangeCoin}>
            Toss Coin
          </button>
          <div className="values">
            <p className="value">Total:{totalValue}</p>
            <p className="value">Heads:{headsValue}</p>
            <p className="value">Tails:{tailsValue}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
