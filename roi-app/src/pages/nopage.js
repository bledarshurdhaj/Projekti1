import React from 'react';

import error from '../foto/error.png';

const NoPage = () => {
  return (
    <>

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '0vh'
      }}
    >
      <h1>No Page Found Error 404 :</h1> </div>
      <div
      style={{

        justifyContent: 'center',
        alignItems: 'center',
    
      }}>
        <img src={error}></img>
      </div>
      </>
    
  );
};

export default NoPage;
