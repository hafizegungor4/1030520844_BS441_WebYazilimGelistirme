import React from 'react';
import Card from 'react-bootstrap/Card';
import { useStoreState } from 'easy-peasy';

function MobileScoreboard() {
  const Player = useStoreState((player) => player.score);
  return (
    <div className="d-xl-none d-lg-none d-md-none">
      <Card className="mt-2">
        <Card.Header>
          <h6>Puan Tablosu</h6>
        </Card.Header>
        <Card.Body>
          {Player
            && Player.map((player) => (
              <div key={player.Name} className="m-2">
                <Card.Header bg="secondary">{player.Name}</Card.Header>
                <h5 className="font-weight-bold mt-2">{player.Score}</h5>
              </div>
            ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default MobileScoreboard;
