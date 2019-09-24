import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validator from 'config/validator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthTemplate from 'templates/AuthTemplate';
import { Paragraph, Input, Button } from 'components/atoms';
import withPageType from 'hoc/withPageType';
import AuthPageContent from 'config/AuthPageContent';
import Constant from 'config/Constants';

import {
  newAccount as newAccountAction,
  login as loginAction,
  setError as setErrorAction,
} from 'actions';

const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledWrongStatement = styled(Paragraph)`
  margin: 10px auto 5px auto;
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.xs};
  word-spacing: ${({ theme }) => theme.font.xxs};
  color: ${({ theme }) => theme.red[0]};
`;
export const StyledButton = styled(Button)`
  display: block;
  width: 80%;
  margin: 20px auto;
  text-transform: uppercase;
`;
export const StyledInput = styled(Input)`
  margin: 10px auto;
  text-align: center;
`;
export const Title = styled(Paragraph)`
  display: block;
  text-align: center;
  margin: 0px auto 10px;
  cursor: pointer;
`;

class AuthPage extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  handleInputChanged = e => {
    const { value, name } = e.target;
    const { [name]: stateValue } = this.state;
    if (value !== stateValue) {
      this.setState({ [name]: value });
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { pageType, Auth } = this.props;
    const { requestLoad } = Auth;

    if (requestLoad) return null;

    const { newAccount, login, setError } = this.props;
    const { firstName, lastName, email, password } = this.state;
    switch (pageType) {
      case 'login':
        {
          const notValid = validator({ email, password });
          if (notValid) return setError(notValid);
          login(email, password);
        }
        break;
      case 'register':
        {
          const notValid = validator({
            firstName,
            lastName,
            email,
            password,
          });
          if (notValid) return setError(notValid);

          newAccount(firstName, lastName, email, password);
        }
        break;
      default:
        return null;
    }
    return null;
  };

  render() {
    const { pageType, Auth } = this.props;
    const pageTypeContent = AuthPageContent[pageType];

    const {
      requestLoad,
      generalError,
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
    } = Auth;

    const {
      stateFirstName,
      stateLastName,
      stateEmail,
      statePassword,
    } = this.state;

    const {
      title,
      firstName,
      lastName,
      email,
      password,
      button,
      subButton,
    } = pageTypeContent;

    return (
      <AuthTemplate>
        <form onSubmit={this.handleFormSubmit}>
          <Title customFontSize="l">{title}</Title>
          <InputsWrapper>
            {firstName && (
              <StyledInput
                name="firstName"
                type={firstName.type}
                placeholder={firstName.placeholder}
                onChange={this.handleInputChanged}
                value={stateFirstName}
                message={
                  firstNameError && Constant.ERRORS[firstNameError]
                }
              />
            )}
            {lastName && (
              <StyledInput
                name="lastName"
                type={lastName.type}
                placeholder={lastName.placeholder}
                onChange={this.handleInputChanged}
                value={stateLastName}
                message={
                  lastNameError && Constant.ERRORS[lastNameError]
                }
              />
            )}
            {email && (
              <StyledInput
                name="email"
                type={email.type}
                placeholder={email.placeholder}
                onChange={this.handleInputChanged}
                value={stateEmail}
                message={emailError && Constant.ERRORS[emailError]}
              />
            )}
            {password && (
              <StyledInput
                name="password"
                type={password.type}
                placeholder={password.placeholder}
                onChange={this.handleInputChanged}
                value={statePassword}
                message={
                  passwordError && Constant.ERRORS[passwordError]
                }
              />
            )}
          </InputsWrapper>
          {generalError && (
            <StyledWrongStatement>
              {Constant.ERRORS[generalError]}
            </StyledWrongStatement>
          )}
          {button && (
            <StyledButton
              red
              type={button.type}
              loadAnimation={requestLoad}
            >
              {button.title}
            </StyledButton>
          )}
          <Title
            customfontsize="xs"
            underline="true"
            as={Link}
            to={subButton.to}
          >
            {subButton.title}
          </Title>
        </form>
      </AuthTemplate>
    );
  }
}

const mapStateToProps = state => ({
  Auth: state.Auth,
});

const mapDispatchToProps = {
  newAccount: newAccountAction,
  login: loginAction,
  setError: setErrorAction,
};
AuthPage.propTypes = {
  pageType: PropTypes.string.isRequired,
  newAccount: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  Auth: PropTypes.shape({
    generalError: PropTypes.string,
    firstNameError: PropTypes.string,
    lastNameError: PropTypes.string,
    emailError: PropTypes.string,
    passwordError: PropTypes.string,
    requestLoad: PropTypes.bool,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withPageType(AuthPage));
