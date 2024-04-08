import { useState, useEffect } from "react";

export default function SimpleFormValidation() {

  const [inputFields, setInputFields] = useState(
    {
        email: "",
        password: "",
        age: null
    }
    );

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    /*
        {
            email:srionline2015@gmail.com,
            password:12345,
            age:
        }
    */
    let errors = {};

    /*  errors = 
        {
            email:"",
            password: "",
            age:"Enter age greater than 18"
        }
    */

    if (inputValues.email.length < 15) {
      errors.email = "Email is too short";
    }

    if (inputValues.password.length < 5) {
      errors.password = "Password is too short";
    }

    if (!inputValues.age || inputValues.age < 18) {
      errors.age = "Enter age greater than 188";
    }
    return errors;
  };

  const handleChange = (e) => {
    //email:srionline2015@gmail.com
    //password:12345
    //age:
    /*  inputFields = 
        {
            email:srionline2015@gmail.com,
            password:12345,
            age:
        }
    */
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    //event = form
    event.preventDefault();//stops form default submission, if validation fails

    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
      //in real time, API will be called & POST method will be used to send the data to API
    }
  }, [errors]);

  return (
    <div className="App">
      {Object.keys(errors).length === 0 && submitting ? (
        <span className="success">Successfully form submitted ✓</span>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div>
            <h2>Form Validation in React</h2>

          <label for="email">Email</label>
          <input type="email" name="email" value={inputFields.email} onChange={handleChange}
            style={{ border: errors.email ? "1px solid red" : null }} ></input>

          {errors.email ? (
            <p className="error">Email should be at least 15 characters long</p>
          ) : null}

            <br></br>

          <label for="password">Password</label>
          <input type="password" name="password" value={inputFields.password} onChange={handleChange}
            style={{ border: errors.password ? "1px solid red" : null }} ></input>

          {errors.password ? (
            <p className="error">Password should be at least 5 characters long</p>
          ) : null}

        <br></br>

          <label for="age">Age</label>
          <input type="number" name="age" value={inputFields.age} onChange={handleChange}
            style={{ border: errors.age ? "1px solid red" : null }} ></input>

          {errors.age ? <p className="error">Enter age greater than 18</p> : null}
            
        </div>
        
        <br></br>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}