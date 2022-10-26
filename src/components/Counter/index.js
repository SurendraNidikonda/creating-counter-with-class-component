import {Component} from 'react'
import './index.css'
class Counter extends Component {
  state = {count: 0}
  onIncreament = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecreament = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button onClick={this.onIncreament} className="button">
            Increase
          </button>
          <button onClick={this.onDecreament} className="button">
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
