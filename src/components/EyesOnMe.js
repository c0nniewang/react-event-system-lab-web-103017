import React from 'react';

class EyesOnMe extends React.Component {
  good = () => {
    console.log('Good!')
  }

  blur = () => {
    console.log('Hey! Eyes on me!')
  }
  render() {
    return (
      <button onFocus={this.good} onBlur={this.blur}></button>
    )
  }
}

export default EyesOnMe;