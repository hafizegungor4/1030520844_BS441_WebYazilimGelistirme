import React from 'react';

import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useStoreActions } from 'easy-peasy';

function ResetGameButton({ sethavewonThreeRounds }) {
  const resetGame = useStoreActions((actions) => actions.reset);

  const handleResetClick = () => {
    resetGame();
    sethavewonThreeRounds(null);
  };

  return (
    <Button variant="danger" className="mt-0 mb-4" onClick={handleResetClick}>
      Restart Game
    </Button>
  );
}

ResetGameButton.defaultProps = {
  sethavewonThreeRounds: PropTypes.func,
};

ResetGameButton.propTypes = {
  sethavewonThreeRounds: PropTypes.func,
};

export default ResetGameButton;
