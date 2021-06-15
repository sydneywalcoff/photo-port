import React from 'react';

function Modal({currentPhoto}) {
    const {name, category, description, index} = currentPhoto;
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 classname="modalTitle">{name}</h3>
                <img src={`./img/large/${category}/${index}.jpg`} alt="current category" />
                <p>{description}</p>
                <button type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;