import React from "react";

const CookOrderList = () => {
  const getOrders = async () => {
    try {
      const response = await fetch("http://localhost:8800/placeorder");
      const data = await response.json();

      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return <button onClick={getOrders}>Cook Page</button>;
};

export default CookOrderList;
