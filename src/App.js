import React, { useState, useEffect } from 'react'
import { Top, Midt, Carousel, Bund } from './components/index'
import './app.css'

import { propHandler } from './api/propHandler';


const App = () => {
  const [auth, setAuth] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await propHandler();
      setImages(result.slideshow);
      setAuth(Boolean(result.auth));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Top />
      <Midt slideshow={images} auth={auth}/>
      <Carousel slideshow={images}/>
      <Bund />
    </div>
  )
}

  export default App