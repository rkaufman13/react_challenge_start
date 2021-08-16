import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = (props) => {
  if (props.contacts){
  if(!props.contacts.length){
    return ("No contacts yet")
  }
  else {
      return (
    <div className="tileListContainer">
     {props.contacts.map((contact,index) => {
       return <Tile
        name={contact.Name}
        phone={contact.Phone}
        email={contact.eMail}
        delete={props.delete}
        key={index}
        index={index}
/>
     }
     )
     }
    </div>

  );
      }
}
else if (props.appointments){
  if(!props.appointments.length){
    return ("No appointments yet")
  }
  else {
      return (
    <div className="tileListContainer">
     {props.appointments.map((appointment,index) => {
       return <Tile
        title={appointment.title}
        date={appointment.date}
        time={appointment.time}
        with={appointment.with}
        delete={props.delete}
        key={index}
        index={index}
/>
     }
     )
     }
    </div>

  );
      }
}




};
