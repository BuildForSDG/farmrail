import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

export default function NoMatch() {
  return (
    <Layout>
      <h2>Oops nothing here!!</h2>
      <Link to="/">Take me home</Link>
    </Layout>
  );
}
