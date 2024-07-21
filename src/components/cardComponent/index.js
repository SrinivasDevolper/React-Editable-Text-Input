import {Component} from 'react'

import './index.css'

class CardComponent extends Component {
  state = {searchVal: '', isDisplay: true}

  onSearchValue = event => this.setState({searchVal: event.target.value})

  onClickSave = () => {
    this.setState(prevState => ({
      isDisplay: !prevState.isDisplay,
    }))
  }

  render() {
    const {searchVal, isDisplay} = this.state
    return (
      <div className="bg-container">
        {isDisplay ? (
          <div className="card-cont">
            <h1>Editable Text Input</h1>
            <div>
              <input
                type="text"
                value={searchVal}
                onChange={this.onSearchValue}
              />
              <button type="button" onClick={this.onClickSave}>
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="card-cont">
            <h1>Editable Text Input</h1>
            <div>
              <p>{searchVal}</p>
              <button type="button" onClick={this.onClickSave}>
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CardComponent
