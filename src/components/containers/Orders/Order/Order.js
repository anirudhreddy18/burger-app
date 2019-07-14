import React from 'react';
import classes from './Order.css';

const order = (props) => {

   let orderArray = [];

   for (const [key, value] of Object.entries(props.ingredients)) {
      console.log(`${key}: ${value}`);
      orderArray.push(<p key={key}>{key}: {value}</p>);
   }

   return <div className={classes.Order}>
      {orderArray}
   </div>
}

export default order;