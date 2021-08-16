import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons'

export const AppointmentSubTile = (props) => {
    return (
      <div>
        {props.with.length?<p className="tile"><FontAwesomeIcon icon={faUser}/> {
          props.with.join(", ")
          
        }</p>:""}
{props.date?<p className="tile"><FontAwesomeIcon icon={faCalendarAlt}/> {props.date}</p>:""}
    {props.time?<p className="tile"><FontAwesomeIcon icon={faClock}/> {props.time}</p>:""}        
      </div>
    );
  };
  
