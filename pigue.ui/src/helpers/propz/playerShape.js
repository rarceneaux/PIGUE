import PropTypes from 'prop-types';

const playerShape = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  position: PropTypes.string,
  imgUrl: PropTypes.string,
});

export { playerShape };