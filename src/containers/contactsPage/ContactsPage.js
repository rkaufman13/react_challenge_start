import React from "react";
import { useState } from "react";
import {ContactForm} from "../../components/contactForm/ContactForm"
import {TileList} from "../../components/tileList/TileList"

export const ContactsPage = (props) => {
  
  const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [email,setEmail] = useState("");
const [duplicate,setIsDuplicate] = useState(false);

const handleChange = (e) => {
  const {name,value} = e.target;
  switch(name){
    case "name":
      setName(value);
      if (duplicate){
        setIsDuplicate(false)
      }
      break;
    case "phone":
      setPhone(value);
      break;
    case "email":
      setEmail(value);
      break;
      default:
        return;
  }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    //get values from state
   const newContactName = name;
   const newContactPhone = phone;
   const newContactEmail = email;

   //check whether this contact already exists
   if (props.contacts.find(contact=> contact.Name===newContactName)){
     console.log("Duplicate found");
     setIsDuplicate(true);
     return;
   }
   else {
     console.log("new contact found, adding to thingy")
     if (!props.contacts.length){
      props.setContact([{'Name': newContactName, 'Phone': newContactPhone,'eMail':newContactEmail}]);
     }
     else{
       props.setContact([{'Name': newContactName, 'Phone': newContactPhone,'eMail':newContactEmail},...props.contacts]);
   }
  }
//clear inputs
  setName("");
  setPhone("");
  setEmail("");

  };

  return (
    <div className="container">
      <section className="form">
        <h2>Add Contact</h2> 
        <ContactForm onSubmit={handleSubmit} name={name} phone={phone} email={email} setName={handleChange} setPhone={handleChange} setEmail={handleChange} isDuplicate={duplicate}/>
      </section>
      <hr />
      <section className="results">
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} delete={props.delete}/>
      </section>
    </div>
  );
};
