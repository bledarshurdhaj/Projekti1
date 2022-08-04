import React from 'react';
import './nopage.scss';
import error from '../foto/error404.png';

const NoPage = () => {
  return (
    <div className="home">

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '0vh'
      }}
    >
      <h1>No Page Found Error 404 :</h1> </div>

      <div className="foto">
        <img src={error}></img>
      </div>
      </div>
    
  );
};

export default NoPage;
