import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthTemplate from 'templates/AuthTemplate';
import Constants from 'config/Constants';

export default function withPageType(ComponentWithPageType) {
  const PageTypeClass = class extends Component {
    state = {
      loading: true,
      pathname: Constants.PATHS.login,
    };

    componentDidMount() {
      const { location } = this.props;
      const { pathname } = location;

      this.setState({ pathname, loading: false });
    }

    render() {
      const { pathname, loading } = this.state;

      if (loading) return <AuthTemplate />;
      return (
        <ComponentWithPageType
          {...this.props}
          pageType={pathname.slice(1)}
        />
      );
    }
  };
  PageTypeClass.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };
  return PageTypeClass;
}
