import React, {Component} from 'react';
import Modal from 'react-modal';

import styles from './AlertModal.scss';

Modal.setAppElement('#root');

class AlertModal extends Component {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    render() {
        return(
            <div>
                <Modal isOpen={this.props.modalIsOpen} contentLabel='Alert' className={styles.alertComponent}>
                    <div>
                        <label htmlFor='name'>Alert</label>
                    </div>
                    <div className={styles.alertMessage}>
                        {this.props.message.map( (a,i) => (
                          <p key={`alertM${i}`}>{a}</p>
                        ))}
                        <button className={styles.alertButton} type='submit' name='ok' onClick={this.props.closeModal}>ok</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default AlertModal;