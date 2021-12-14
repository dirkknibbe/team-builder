import React from 'react'

export default function MemberForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    // c) use the `update` callback coming in through props
    const name = evt.target.name;
    const { value } = evt.target;
    update(name, value);

  }

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    // c) use the `submit` callback coming in through props
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
              <input
                name="name"
                type="text"
                placeholder="Type Your Name"
                maxLength='30'
                value={values.name}
                onChange={onChange}
              />
        </label>

        <label>Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
           <input
                name="email"
                type="email"
                placeholder="Type Your Email"
                value={values.email}
                onChange={onChange}
              />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}

        <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
            <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a role --</option>
            <option value="Morale Officer">Morale Officer!</option>
            <option value="Cook">The Cook!</option>
            <option value="Low Level Grunt">Low Level Grunt</option>
            </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
