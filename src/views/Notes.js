import React from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'components/templates/GridTemplate';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(({ id, title, content, created }) => (
      <Card id={id} cardType="notes" key={id} title={title} content={content} created={created} />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes });

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

export default connect(mapStateToProps)(Notes);
