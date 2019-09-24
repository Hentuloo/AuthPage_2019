import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Constants from 'config/Constants';

export default function withAuth(ComponentWithAuth) {
  return class CheckAuthClass extends Component {
    state = {
      loading: true,
      redirect: false,
    };

    componentDidMount() {
      const token = localStorage.getItem('jsonWebToken');
      if (token) {
        return this.setState({ loading: false, redirect: false });
      }
      return this.setState({ loading: false, redirect: true });
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) return null;
      if (redirect) {
        return <Redirect to={Constants.PATHS.login} />;
      }
      return <ComponentWithAuth {...this.props} />;
    }
  };
}
