import React, { useState } from "react";

import ModalSolution from '../../components/ModalSolution';

export default function () {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container">
      <ModalSolution
        isVisible={true}
        onOk={() => setOpenModal(true)}
        onCancel={() => setOpenModal(false)}
      >
        <h2>Demo Modal</h2>
        <form>
          <input type="text" />
        </form>
      </ModalSolution>
      <button
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </button>
    </div>
  );
}