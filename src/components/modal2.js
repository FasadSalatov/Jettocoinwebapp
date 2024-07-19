// src/components/Modal.js
import React from 'react';
import '../components/wlcpage/modal2.css';
import checkmark from '../imgs/checkmark.png'; // Убедитесь, что путь к изображению правильный

const Modal2 = ({ show, handleClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-icon">
                    <img src={checkmark} alt="Checkmark" />
                </div>
                <p>Referral link was copied!</p>
                <button className="modal-button" onClick={handleClose}>Ok</button>
            </div>
        </div>
    );
}

export default Modal2;
