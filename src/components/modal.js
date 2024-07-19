import React from 'react';
import './wlcpage/modal.css';

function Modal({ show, onClose, taskInfo }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Task Claimed</h2>
        <p>{taskInfo}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
