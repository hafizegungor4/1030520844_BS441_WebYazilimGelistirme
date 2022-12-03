import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <h2 data-cy="navbar" className="mx-auto text-white">
        Taş Kağıt Makas
      </h2>
    </Navbar>
  );
}

export default Header;
