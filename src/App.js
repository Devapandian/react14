import React from 'react';
import Cards from './component/Cards';
import Alerts from './component/Alerts';
import Button from 'react-bootstrap/Button';

function App() {
  const showAlert = () => {
    ('Alert triggered!');
  };

  return (
    <>
      <div className="container">
        <h1>Using Your Team Library</h1>
        <div className="container-fluid">
          To Use Style and Components from Team libraries, click on{' '}
          <Button variant="light" onClick={showAlert}>
            Library
          </Button>{' '}
          in the Assets panel in any of your files. Toggles on the ones you want to use in your design
        </div>
        <Cards />
      </div>
      <Alerts />
    </>
  );
}

export default App;
