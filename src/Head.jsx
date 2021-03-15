import React from "react";

const Head = () => {
  return (
    <>
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <h1>Name</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Symbol</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">Price</p>
            <p className="coin-volume">Volume</p>

            <p className="coin-percent ">Change</p>

            <p className="coin-marketcap">Mkt Cap</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
