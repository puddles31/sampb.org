import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import SpotifyNowPlaying from './spotify/SpotifyNowPlaying';

// const spotifyContainer = document.getElementById("spotify-container");
// const root = ReactDOM.createRoot(root);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
    <ChakraProvider>
      <SpotifyNowPlaying />
    </ChakraProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <SpotifyNowPlaying />
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );