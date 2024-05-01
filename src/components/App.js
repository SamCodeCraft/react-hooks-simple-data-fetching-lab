
import React, { useEffect, useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogImage(data.message));
  }, []);

  if (dogImage === null) {
    return <p>Loading...</p>;
  }

  return <img src={dogImage} alt="A Random Dog" />;
}

export default App;
