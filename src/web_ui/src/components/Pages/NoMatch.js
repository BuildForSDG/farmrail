import React from 'react';
import { Link } from 'react-router-dom';
// import Layout from '../Layout';

export default function NoMatch() {
  return (
    // <Layout>
    <div>
      <h2 id="notFoundMessage">Oops nothing here!!</h2>
      <Link to="/">Take me home</Link>
    </div>
    // </Layout>
  );
}
