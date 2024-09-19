import React from 'react';
import './App.css';
import ImageViewer from './ImageViewer'; 

function App() {
  return (
    <div className="App">
      <h1>React Image Viewer</h1>
      <h4>(Select Image You want to view)</h4>
      <ImageViewer />
    </div>
  );
}

export default App;