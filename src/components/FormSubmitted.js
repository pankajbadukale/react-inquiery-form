import React from "react";
import { Link } from 'react-router-dom'

const FormSubmitted = (props) => {
    return (
      <div className="jumbotron text-xs-center">
        <h1 className="display-3">Thank You!</h1>
        <p className="lead"><strong>Please check your email</strong> for further instructions.</p>
        <hr />
        <p className="lead">
          <Link role="button" className="btn btn-primary btn-sm" to={'/'} >Continue to homepage</Link>
          <Link role="button" className="btn btn-primary btn-sm" to={'/list'} >View List</Link>
        </p>
      </div>
    );
}

export default FormSubmitted;
