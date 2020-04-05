import React from "react";

const ErrorMessage = () => {
  return (
    <>
      <img src={process.env.PUBLIC_URL + '/img/got.jpg'}></img>
      <span>Error messagw</span>
    </>
  );
};

export default ErrorMessage;
