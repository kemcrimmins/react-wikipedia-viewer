import React, {Component} from 'react';
import {render} from 'react-dom';

// export default 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      selectedArticle: null
    };
  }

  render() {
    return (
      <div>
        Hello from react
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));