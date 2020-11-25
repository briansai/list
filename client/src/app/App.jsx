import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
  const [text, setText] = useState('Hello');

  useEffect(() => {
    axios
      .get('/')
      .then((data) => setText(data))
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return <div className="app">{text.text}</div>;
};
