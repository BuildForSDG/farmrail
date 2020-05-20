// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Login() {
//   return (
//     <div>
//       <Link to="/dashboard">
//         <h2>Login</h2>
//       </Link>
//     </div>
//   );
// }

import { Link } from 'react-router-dom';
import React, { PureComponent } from "react"
import { Form, Field, ErrorMessage } from "formik"

export default class Login extends PureComponent {
  render() {
    return (
      <Form>
        <Field type="text" name="email" placeholder="email" />
        <ErrorMessage name="email" />
        <Field type="text" name="password" placeholder="password" />
        <ErrorMessage name="password" />
        <Link to="/dashboard">
        <button type="submit"> Submit </button>
        </Link>
      </Form>
    )
  }
}