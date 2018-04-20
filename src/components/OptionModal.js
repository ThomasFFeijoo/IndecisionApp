import React from 'react';
import Modal from 'react-modal';

const Optionmodal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption} // function executed when click outside of the box, or esc
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

Modal.setAppElement('#app');

export default Optionmodal;