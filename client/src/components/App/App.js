import React from "react";
import Axios from "axios";

import "./App.css";

import useForm from "../../hooks/useForm";

// email, subject, message

const App = () => {
  const [state, handleState, resetState] = useForm({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    const email = state.email;
    const subject = state.subject;
    const message = state.message;
    e.preventDefault();
    Axios.post(`http://localhost:4000/send-email`, { email, subject, message })
      .then((_) => {
        resetState();
        console.log("everything it's ok");
      })
      .catch((error) => console.log("Nothing it's ok"));
  };

  return (
    <div className="App container-fluid">
      <div className="Jumbotron bg-light">
        <h1 className="display-4 text-center">Nodemailer+react</h1>
        <p className="lead">read README for instructions</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6">
          <form>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="Here goes an email"
                name="email"
                value={state.email}
                onChange={handleState}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Subject">Subject</label>
              <input
                type="email"
                className="form-control"
                id="Subject"
                placeholder="Here goes the email reason"
                name="subject"
                value={state.subject}
                onChange={handleState}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">message</label>
              <input
                type="text"
                className="form-control"
                id="message"
                placeholder="The message"
                name="message"
                value={state.message}
                onChange={handleState}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
