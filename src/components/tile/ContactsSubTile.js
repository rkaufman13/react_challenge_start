import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

export const ContactsSubTile = (props) => {
    return (
      <div>
{props.phone?<p className="tile"><FontAwesomeIcon icon={faPhone}/> {props.phone}</p>:""}
    {props.email?<p className="tile"><FontAwesomeIcon icon={faEnvelopeSquare}/> {props.email}</p>:""}        
      </div>
    );
  };
  
