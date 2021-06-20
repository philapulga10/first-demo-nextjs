import React, { useState, useEffect } from "react";

import Button from '../../../component/button';

const LifeCycle = () => {
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   // <=> componentDidMount & componentDidUpdate
  //   console.log('useEffect run');

  //   return () => {
  //     // <=> componentWillUnmount <=> Component sẽ bị remove khỏi cấu trúc DOM
  //   }
  // });

  useEffect(() => {
    console.log('run khi bat ke state nao thay doi');
  })

  useEffect(() => {
    console.log('run khi counter hoac visible thay doi');
  }, [counter, visible])

  useEffect(() => {
    // <=> componentDidMount
    console.log('useEffect run - empty deps');
  }, [])

  useEffect(() => {
    console.log('Lang nghe su thay doi cua counter');
  }, [counter])

  useEffect(() => {
    console.log('Lang nghe su thay doi cua visibale');
  }, [visible])

  console.log('Truoc khi return <=> render()');

  return (
    <div className="container">
      <h1>Playground - Life Cycle - React Hooks</h1>
      <button onClick={() => {
        // c1:
        // setCounter(counter + 1);
        // c2:
        setCounter((prevCounter) => {
          return (prevCounter + 1);
        })
      }}>Counter Add</button>
      <p>{counter}</p>
      <button onClick={() => setVisible(false)}>Hide button</button>
      {
        visible && <Button />
      }
    </div>
  )
}

export default LifeCycle;