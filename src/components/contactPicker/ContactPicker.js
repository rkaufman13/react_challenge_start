import React from "react";
import { useState } from "react";

export const ContactPicker = (props) => {

function handleChange(e){
  let value = Array.from(e.target.selectedOptions, option=>option.value);
props.onChange(value);
}


  return (
    <div>
    <label for="withwhom">Who's the appointment with?</label>
    <br></br>
    <select name="withwhom" multiple value={props.value} onChange={props.onChange}>
    {props.contacts.map((contact, index) => {
return <option value={contact.Name} key={index}>{contact.Name}</option>
    })}
    
    </select>
    </div>
  );
};
