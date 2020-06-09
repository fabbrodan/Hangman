import React, {useState, useEffect} from 'react'
import {Modal} from 'react-bootstrap'

const LoseModal = ({isShowing, word}) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    
    useEffect(() => {
        setOpen(isShowing);
    }, [isShowing]);

    const boldStyle = {
        fontWeight: "bolder",
    }

    return (
        <Modal show={open} onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
                <h3>Tyvärr!</h3>
            </Modal.Header>
            <Modal.Body>
                Du lyckades inte gissa rätt.
                Ordet var <span style={boldStyle}>{word}</span>.
            </Modal.Body>
        </Modal>
        )
    }

    export default LoseModal;