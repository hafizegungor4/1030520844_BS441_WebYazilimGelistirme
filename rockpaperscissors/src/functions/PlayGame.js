import WEAPONS from '../const/WEAPONS';

import RandomWeapon from './RandomWeapon';
import CheckWinner from './CheckWinner';

function PlayGame(playerSelectedWeapon) {
  const playerSelected = WEAPONS.find((weapon) => weapon.name === playerSelectedWeapon);

  const computerSelected = RandomWeapon();
  const youWin = CheckWinner(playerSelected, computerSelected);

  if (playerSelected.name === computerSelected.name) {
    return {
      winner: 'Berabere Kaldınız...',
      computerSelected: computerSelected.name,
    };
  }

  if (youWin) {
    return {
      winner: 'Oyuncu Kazandı...',
      computerSelected: computerSelected.name,
    };
  }

  return {
    winner: 'Bilgisayar Kazandı...',
    computerSelected: computerSelected.name,
  };
}

export default PlayGame;
