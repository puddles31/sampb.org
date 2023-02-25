import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SpotifyNowPlaying from './spotify/SpotifyNowPlaying';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
    <ChakraProvider>
      <SpotifyNowPlaying />
    </ChakraProvider>
  </React.StrictMode>
);


// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const domContainer = document.querySelector('#spotify_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));