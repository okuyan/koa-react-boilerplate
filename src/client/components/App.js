import React, { PropTypes } from 'react';

function App({ children }) {
  return (
    <div className="react-app-container">
      <div>{children}</div>
    </div>
  );
}

export default App;
