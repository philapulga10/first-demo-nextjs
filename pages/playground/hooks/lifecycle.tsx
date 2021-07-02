import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";

import Button from '../../../components/Button';
import useConstructor from '../../../custom-hooks/useConstructor';

let isRun = false;

const LifeCycle = () => {
  useMemo(() => {
    console.log('useMemo run <=> constructor cach 3');
  }, [])

  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
  const [user, setUser] = useState({
    firstName: 'Phi',
    lastName: 'Nguyen'
  });
  const inputFileEl = useRef(null);
  const isRunHook = useRef(false);
  useConstructor(() => {
    console.log('constructor cach 4')
  });

  if (isRunHook.current === false) {
    console.log('constructor cach 2');

    isRunHook.current = true;
  }

  if (isRun === false) {
    // handle constructor
    console.log('constructor cach 1');

    isRun = false;
  }

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

  const fullName = useMemo(() => {
    return (user.firstName + user.lastName);
  }, [user]);

  const handleIncreaseCounter = useCallback(
    () => {
      // c1:
      // setCounter(counter + 1);
      // c2:
      setCounter((prevCounter) => {
        return (prevCounter + 1);
      })
    }, [counter]
  );

  return (
    <div className="container">
      <h1>Playground - Life Cycle - React Hooks</h1>
      <button onClick={handleIncreaseCounter}>Counter Add</button>
      <p>{counter}</p>
      <button onClick={() => setVisible(false)}>Hide button</button>
      {
        visible && <Button />
      }
      <input
        style={{
          opacity: 0,
          visibility: 'hidden',
          position: 'fixed',
          left: '-1000px'
        }}
        ref={inputFileEl}
        type="file"
      />
      <button onClick={() => {
        // c1:
        // inputFileEl.current.click()
        // c2:
        const input = document.querySelector('input[type="file"]') as HTMLInputElement;
        input.click();
      }} className="upload">Upload image</button>
    </div>
  )
}

export default LifeCycle;