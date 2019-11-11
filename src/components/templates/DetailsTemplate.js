import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'components/templates/UserPageTemplate';

const DetailsTemplate = ({ children }) => (
  <UserPageTemplate>
    {children}
    <Link to="/">Go back</Link>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.array.isRequired,
};
export default DetailsTemplate;
