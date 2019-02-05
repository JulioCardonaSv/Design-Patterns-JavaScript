import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { themeLight } from '../themes/theme.light';
import { themeDark } from '../themes/theme.dark';

const StyledTitle = styled.h1`
  font-family: sans-serif;
  padding: 2em;
  background: ${props => props.theme.primaryColor};
  /* background: ${props => (props.theme === 'dark' ? 'rgb(60, 60, 60)' : 'rgb(255, 250, 228)')}; */
  font-size: 2em;
  text-align: center;
  color: ${props => (props.theme === 'dark' ? '#E22A23' : 'rgb(219, 109, 114)')};
  margin: 0;
`;

export const Title = props => {
  const { text, mode } = props;
  const theme = mode === 'dark' ? themeDark : themeLight;

  return (
    <ThemeProvider theme={theme}>
      <StyledTitle>{text}</StyledTitle>
    </ThemeProvider>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
};

Title.defaultProps = {
  text: 'JavaScript Patterns',
  mode: 'dark'
};

const mapStateToProps = ({ mode }) => ({ mode });

export default connect(mapStateToProps)(Title);