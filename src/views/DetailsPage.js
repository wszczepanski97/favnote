/* eslint-disable react/prop-types */
import React from 'react';
import DetailsTemplate from 'components/templates/DetailsTemplate';
import { routes } from 'routes';

const DetailsPage = ({ match }) => (
  <DetailsTemplate>
    <p>{match.path === routes.twitter}</p>
  </DetailsTemplate>
);

export default DetailsPage;
