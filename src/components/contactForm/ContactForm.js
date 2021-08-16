import React from "react";

export const ContactForm = (props) => {

  return (
    <form name="contact" onSubmit={props.onSubmit}>
<label for="name">{props.isDuplicate?<span className="error">Duplicate contact name found</span>:"Contact name:"}</label><input type="text" name="name" value={props.name} onChange={props.setName} placeholder="name"></input>
<label for="phone">Contact phone:</label><input type="text" name="phone" value={props.phone} onChange={props.setPhone} placeholder="phone" pattern="([0-9]{3})?[-. )]*[0-9]{3}[-. ]*[0-9]{4}"></input>
<label for="email">Contact e-mail:</label><input type="email" name="email" value={props.email} onChange={props.setEmail} placeholder="email"></input>

<button>Submit</button>
    </form>


  );
};


// ({
//   name,
//   setName,
//   phone,
//   setPhone,
//   email,
//   setEmail,
//   handleSubmit
// })