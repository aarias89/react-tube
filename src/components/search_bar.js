// import React from 'react';
import React, { Component } from 'react';

// export class SearchBar extends React.Component {
export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }


  render() {
    // return <input onChange={this.onInputChange} />;
    return (
      <div>
        <input
          value={ this.state.term }
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }


  // onInputChange(event) {
  //   console.log(event.target.event
  //   )
  // }
}
