import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'components/templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ id, title, content, twitterName, created }) => (
      <Card
        id={id}
        key={id}
        cardType="twitters"
        title={title}
        content={content}
        twitterName={twitterName}
        created={created}
      />
    ))}
  </GridTemplate>
);

// Take state.twitters and return object with key twitters and value equals to state.twitters
const mapStateToProps = ({ twitters }) => ({ twitters });

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

// Connection between transformed state to props and Twitters component
export default connect(mapStateToProps)(Twitters);
