import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './components/search_bar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
//install package 'youtube API seach'
//npm install --save youtube-api-search
const API_KEY = 'AIzaSyDUP8UZWhjhwHJXzLPEZEXFDkdMxIIXrBo'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch({term})
  }

  videoSearch(term) {
    // console.log("Inside videoSearch---" + term)
    YTSearch({key: API_KEY, term:'Hans Zimmer'}, (videos) => {
      this.setState({
      videos: videos,
      selectedVideo: videos[0]
      });
    });
  }


  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>);
  }
}

//place this component's generated html and out it in the DOM
ReactDOM.render(<App/>, document.getElementById('app'));
