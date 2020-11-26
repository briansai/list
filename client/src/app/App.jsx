import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
  const [text, setText] = useState('Hello');

  useEffect(async () => {
    const response = await axios.get('/');
    setText(response.data);
  }, []);

  return <div className="app">{text}</div>;
};
