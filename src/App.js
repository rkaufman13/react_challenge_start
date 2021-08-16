import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState } from "react";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts,setContact] = useState([]);
  const [appointments,setAppointment] = useState([]);

  function deleteItem(e){
    
    if(e.target.getAttribute("type")==="appointment"){
   const newAppointmentArray = [...appointments];
    newAppointmentArray.splice(e.target.id,1)
setAppointment(newAppointmentArray);
}
else if (e.target.getAttribute("type")==="contact"){
  const newContactArray = [...contacts];
  newContactArray.splice(e.target.id,1)
  setContact(newContactArray);
}
else {
  return;
}
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


 

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active" className="link">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active" className="link">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} setContact={setContact} delete={deleteItem} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} setAppointment={setAppointment} contacts={contacts} delete={deleteItem}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
