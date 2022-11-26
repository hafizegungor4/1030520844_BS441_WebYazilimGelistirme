import React, { createElement, Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import WEAPONS from '../../../const/WEAPONS';

function ListWeapons({ handlePlayGameClick, havewonThreeRounds }) {
  const weaponClass = `m-4 d-inline-block ${havewonThreeRounds && 'd-none'}`;

  return (
    <div className="m-4">
      {WEAPONS.map(({ name, id, component }) => (
        <Fragment key={id}>
          <div className={weaponClass} data-testid={`${name}Div`}>
            <Button
              data-testid={name}
              data-cy={name}
              variant="outline-dark"
              aria-label={name}
              onClick={() => handlePlayGameClick(name)}
            >
              {createElement(component)}
            </Button>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

ListWeapons.defaultProps = {
  handlePlayGameClick: PropTypes.func,
  havewonThreeRounds: PropTypes.string,
};

ListWeapons.propTypes = {
  handlePlayGameClick: PropTypes.func,
  havewonThreeRounds: PropTypes.string,
};

export default ListWeapons;
