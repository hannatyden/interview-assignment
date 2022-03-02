import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home'

function App() {
  const [data, fetchData] = useState([]);
  const [hasError, setErrors] = useState(false);

  async function getData() {
    const res = await fetch('http://localhost:3001/posts?limit=10');
    res
      .json()
      .then(res => fetchData(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {hasError === false ? (
          <Home content={data} />
        ) : (
          'Error!'
        )}
    </div>
  );
}

export default App;
