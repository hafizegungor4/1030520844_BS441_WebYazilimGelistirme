import React from 'react';

import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

import { ReactComponent as HandScissors } from '../../../assets/scissors.svg';
import { ReactComponent as HandRock } from '../../../assets/rock.svg';
import { ReactComponent as HandPaper } from '../../../assets/paper.svg';

function ShowWinner({
  showWinnerModal, setShowWinnerModal, computerSelected, winner,
}) {
  const handleClose = () => {
    setShowWinnerModal(false);
  };

  return (
    <Modal
      data-testid="modalId"
      show={showWinnerModal}
      onClick={handleClose}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton />
      <Modal.Title>
        <h4 data-cy="winnermodaltext" className="text-center mt-2">
          Kazanan:
          {' '}
          {winner && winner.toString()}
        </h4>
      </Modal.Title>
      <Modal.Body>
        <h4 className="text-center">
          Bilgisayarın seçimi:
          <br />
          <br />
          {computerSelected === 'Rock' && <HandRock />}
          {computerSelected === 'Scissors' && <HandScissors />}
          {computerSelected === 'Paper' && <HandPaper />}
        </h4>
      </Modal.Body>
    </Modal>
  );
}

ShowWinner.defaultProps = {
  showWinnerModal: PropTypes.bool,
  setShowWinnerModal: PropTypes.func,
  computerSelected: PropTypes.string,
  winner: PropTypes.string,
};

ShowWinner.propTypes = {
  showWinnerModal: PropTypes.bool,
  setShowWinnerModal: PropTypes.func,
  computerSelected: PropTypes.string,
  winner: PropTypes.string,
};

export default ShowWinner;
