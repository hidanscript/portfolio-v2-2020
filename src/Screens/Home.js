import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Skills from '../Components/Skills';
import Portfolio from '../Components/Portfolio';
import Contact from '../Components/Contact';

import analytics from '../lib/analytics';

function App() {
  
  useEffect(() => {
    analytics.registerNewVisit();
  }, []);

  return (
    <div className="App">
      <Header />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
