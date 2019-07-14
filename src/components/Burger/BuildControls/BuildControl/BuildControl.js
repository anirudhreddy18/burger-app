import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) =>
{
   return <div className = {classes.BuildControl}>
      <div className = {classes.Label}>{props.Label}</div>
      <button className={classes.More} onClick = {props.addHandler}>More</button>
      <button className={classes.Less} onClick = {props.removeHandler} disabled = {props.disabled}>Less</button>
   </div>
}

export default buildControl;