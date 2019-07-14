import React , {PureComponent }from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary'

class Modal extends PureComponent
{
     render()
     {
        let modalDisplay = null;
        if (this.props.display) {
            modalDisplay = <Aux>
                <Backdrop show={this.props.display} clicked = {this.props.modalClosed} />
                <div className={classes.Modal}>
                {this.props.children}
            </div> </Aux>
        }
        return modalDisplay;
     }
}
export default Modal;

