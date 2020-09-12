import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import './app.scss';
import { Layout, Header, Body, Footer } from './components/index';

class App extends Component {
  render() {
    return (
      <div className="root">
        <Layout header={<Header />} body={<Body />} footer={<Footer />} />
      </div>
    );
  }
}

export default hot(module)(App);
