import './App.css';
import React, { useState } from 'react'
import Member from './Member.js'
import MemberForm from './MemberForm.js'


export default function App() {

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}


  const [members, setMembers] = useState([]) // careful what you initialize your state to

  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] =  useState(initialFormValues); // fix this using the state hook
  const [error, setError] = useState("");
  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new friend object, trimming whitespace from username and email
    //  b) prevent further action if either username or email or role is empty string after trimming
    //  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API
    //  d) also on success clear the form
    const newMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }

    if(!newMember.username || !newMember.email || !newMember.role) {
      setError("all fields are required ya chump!");
    }
    setMembers(members.concat(newMember));
    setFormValues(initialFormValues);
  }


  return (
    <div className='container'>
      <h1>My Team!</h1>

      <MemberForm
        // 🔥 STEP 2 - The form component needs its props.
        //  Check implementation of FriendForm
        //  to see what props it expects.

        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        members.map(mem => {
          return (
            <Member key={mem.id} details={mem} />
          )
        })
      }
    </div>
  )


}


