import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const memberList = [
  { name: 'DogeyDoge', email: 'dog@dog.com', role: 'morale officer' },
  { name: 'Tweetie', email: 'bird@bird.com', role: 'smoke detector'},
  { name: 'Goldie', email: 'fish@fish.com', role: 'CEO' },
]

const initialFormValues = { name: '', email: '', role: '' }

function SimpleForm() {
  const [formValues, setFormValues] = useState({initialFormValues});
  const [members, setMember] = useState(memberList);

  const change = (evt) => {
    const { value, name } = evt.target;

    setFormValues({ ...formValues, [name]: value });
  }
  const submit = (evt) => {
    evt.preventDefault();
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role

    }
    setMember(members.concat(newMember));
    setFormValues(initialFormValues);
  }

return (
  <div>
    <h1>Simple Member List App</h1>
    {members.map((mem, idx) => (
      <div key={idx}>
      {mem.name} at {mem.email} is our {mem.role}
      </div>
    ))}
    <form onSubmit={submit}>
      <input 
      value={formValues.name}
      onChange= {change}
      name="name"
      type="text"
      placeholder="Type Name"
    />
      <input 
      value={formValues.email}
      onChange= {change}
      name="email"
      type="email"
      placeholder="Type Email"
    />
      <input 
      value={formValues.role}
      onChange={change}
      name="role"
      type="text"
      placeholder="Type Role"
    />
    <button>Submit</button>
    </form>
  </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    {/* <SimpleForm /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
