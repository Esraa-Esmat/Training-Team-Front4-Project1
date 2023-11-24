import React from 'react';
import PALESTINE from '../../../Assets/images/PALESTINE.png';

const PalestineHeader = () => {
  return (
    <div class="bg-white text-dark text-center fw-bold">
      <img src={PALESTINE} alt="Palestine Flag" style={{ height: '28px' }} />
      <span class="px-2">  FREE PALESTINE  </span>
      <img src={PALESTINE} alt="Palestine Flag" style={{ height: '28px' }} />
    </div>
  );
};

export default PalestineHeader;
