import React, {useState, useEffect} from 'react';
import { Modal } from 'react-bootstrap';

const WinModal = ({isShowing}) => {
    const [open, setOpen] = useState(isShowing);

    const handleClose = () => setOpen(false);

    useEffect(() => {
        setOpen(isShowing);
    }, [isShowing]);

    return(
        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                Header Text
            </Modal.Header>
            <Modal.Body>
                Body text
            </Modal.Body>
        </Modal>
    )
}

export default WinModal;