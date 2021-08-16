import React from "react";
import { useState } from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm"
import {TileList} from "../../components/tileList/TileList"


export const AppointmentsPage = (props) => {

const [appointmentTitle,setAppointmentTitle] = useState("");
const [appointmentDate,setAppointmentDate] = useState("");
const [appointmentTime,setAppointmentTime] = useState("");
const [appointmentWith,setAppointmentWith] = useState([]);
const [duplicate,setIsDuplicate] = useState(false);

const handleChange = (e) => {
  let {name,value} = e.target;
  switch(name){
    case "title":
      
      setAppointmentTitle(value);
      if (duplicate){
        setIsDuplicate(false)
      }
      break;
    case "date":
      setAppointmentDate(value);
      break;
    case "time":
      setAppointmentTime(value);
      break;
      case "withwhom":
        value = Array.from(e.target.selectedOptions, option=>option.value);
        setAppointmentWith(value);
        break;
      default:
        return;
  }
  }



  const handleSubmit = (e) => {
    e.preventDefault();
 //get values from state
 const newAppointmentTitle = appointmentTitle;
 const newAppointmentDate = appointmentDate;
 const newAppointmentTime = appointmentTime;
 const newAppointmentWith = appointmentWith;

 //check whether this contact already exists
 if (props.appointments.find(appointment=> appointment.title===newAppointmentTitle)){
   console.log("Duplicate found");
   setIsDuplicate(true);
   return;
 }
 else {
   console.log("new appointment found, adding to thingy")
   if (!props.appointments.length){
    props.setAppointment([{'title': newAppointmentTitle, 'date': newAppointmentDate,'time':newAppointmentTime,'with':newAppointmentWith}]);
   }
   else{
    props.setAppointment([{'title': newAppointmentTitle, 'date': newAppointmentDate,'time':newAppointmentTime,'with':newAppointmentWith},...props.appointments]);
 }
}
//clear inputs
setAppointmentTitle("");
setAppointmentDate("");
setAppointmentTime("");
setAppointmentWith([]);
  };

  return (
    <div className="container">
      <section className="form">
        <h2>Add Appointment</h2>
        <AppointmentForm onSubmit={handleSubmit} title={appointmentTitle} date={appointmentDate} time={appointmentTime} onChange={handleChange} isDuplicate={duplicate} contacts={props.contacts}/>
      </section>
      <section className="results">
        <h2>Appointments</h2>
        <TileList appointments={props.appointments} delete={props.delete}/>
      </section>
    </div>
  );
};
