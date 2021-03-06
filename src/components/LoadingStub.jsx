import * as React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LoadingStub = () => {
  return (
    <Loader
      type={'Grid'}
      color="#00BFFF"
      height={100}
      width={100}
      timeout={10000} //3 secs
    />
  );
};

export default LoadingStub;
