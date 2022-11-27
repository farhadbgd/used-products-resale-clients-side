import React from 'react';

const ConfirmationModalBuyer = ({ title, message, successButtonName, closeModal, modalData, successAction }) => {
    return (
        <div>
            <input type="checkbox" id="ConfirmationModalBuyer" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="ConfirmationModalBuyer"
                            className="btn btn-primary">{successButtonName}</label>
                        <button onClick={closeModal} className='btn btn-outline'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModalBuyer;