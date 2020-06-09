import React, {useState, useEffect} from 'react';
import { Modal } from 'react-bootstrap';

const WinModal = ({isShowing, guesses}) => {
    const [open, setOpen] = useState(isShowing);

    const handleClose = () => setOpen(false);

    useEffect(() => {
        setOpen(isShowing);
    }, [isShowing]);

    return(
        <Modal show={open} onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
                <h3>Grattis!</h3>
            </Modal.Header>
            <Modal.Body>
                Du gissade rätt ord på {guesses} försök!
            </Modal.Body>
        </Modal>
    )
}

export default WinModal;