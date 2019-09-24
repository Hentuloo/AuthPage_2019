import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  logout as logoutAction,
  getBasicInformation as getBasicInformationAction,
} from 'actions';

import MainTemplate from 'templates/MainTemplate';
import { Button, Paragraph } from 'components/atoms';

const StyledParagraph = styled(Paragraph)`
  margin: 5px auto;

  text-align: center;
  max-width: 660px;
`;
const StyledButton = styled(Button)`
  margin: auto auto 0px auto;
  text-transform: uppercase;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 270px;
`;

class MainPage extends Component {
  state = {};

  componentDidMount() {
    const { getBasicInformation } = this.props;
    getBasicInformation();
  }

  handleButtonLogout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { data } = this.props;
    const { email, firstName, requestLoad } = data;

    return (
      <MainTemplate>
        <Wrapper>
          <StyledParagraph customfontsize="l">{`Hello ${firstName ||
            ''}!`}</StyledParagraph>
          <StyledParagraph red customfontsize="m">{`Email: ${email ||
            ''}`}</StyledParagraph>
          <StyledButton
            onClick={this.handleButtonLogout}
            loadAnimation={requestLoad}
          >
            Logout
          </StyledButton>
        </Wrapper>
      </MainTemplate>
    );
  }
}
const mapStateToProps = state => ({
  data: state.Data,
});
const mapDispatchToProps = {
  logout: logoutAction,
  getBasicInformation: getBasicInformationAction,
};
MainPage.propTypes = {
  getBasicInformation: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  data: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    requestLoad: PropTypes.bool,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
