import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import Scoreboard from './Scoreboard.component';
import MobileScoreboard from './MobileScoreBoard.component';
import Game from './Game.component';

function Main() {
  return (
    <Row className="mt-2 text-center justify-content-center">
      <Col>
        <MobileScoreboard />
        <Card className="d-block mx-auto mt-4 text-center">
          <Card.Header>
            <h6>Oyuna başlamak için aşağıdan seçim yapınız...</h6>
          </Card.Header>
          <Game />
        </Card>
        <Scoreboard />
      </Col>
    </Row>
  );
}

export default Main;
