import React from "react";
import {ContactsSubTile} from './ContactsSubTile';
import {AppointmentSubTile} from './AppointmentSubTile';
import {DeleteIcon} from './DeleteIcon';

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <DeleteIcon id={props.index} delete={props.delete} type={props.name?"contact":"appointment"}/>
      <p className="tile-title">{props.name?props.name:props.title}</p>
      {props.name?
       <ContactsSubTile phone={props.phone} email={props.email}/>
      :
      <AppointmentSubTile date={props.date} time={props.time} with={props.with}/>
    }
      
    </div>
  );
};
