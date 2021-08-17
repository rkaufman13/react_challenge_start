import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form name="appointment" onSubmit={props.onSubmit}>
<label for="appointment">{props.isDuplicate?<span className="error">Duplicate appointment found</span>:"Appointment:"}</label>
<br/>
<input type="text" name="title" value={props.title} onChange={props.onChange} placeholder="name of your appointment" required></input>
{props.contacts.length?
<ContactPicker contacts={props.contacts} value={props.withwhom} onChange={props.onChange}/>:""
}
<br/><label for="date">Date of appointment:</label>
<br/><input type="date" name="date" value={props.date} min={getTodayString()} onChange={props.onChange} placeholder="date of the appointment"></input>
<br/><label for="time">Time of appointment:</label><br/>
<input type="time" name="time" value={props.time} onChange={props.onChange} placeholder="time"></input>
<br/>
<button>Submit</button>
    </form>

  );
};
