import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'components/templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map(({ id, title, content, articleUrl, created }) => (
      <Card
        id={id}
        key={id}
        cardType="articles"
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ articles }) => ({ articles });

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps)(Articles);
