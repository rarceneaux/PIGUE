import PropTypes from 'prop-types';

const formationShape = PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.string,
  imgUrl: PropTypes.string,
});

export { formationShape };