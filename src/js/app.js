import React, {Component} from 'react';
import {render} from 'react-dom';
import SearchBar from '../components/search_bar';

// export default 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      selectedArticle: null
    };
  }

  articleSearch(term) {

  }

  render() {
    return (
      <div>
        <h1>This is from the App.js render</h1>
        <SearchBar onSearchTermChange={this.articleSearch}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));