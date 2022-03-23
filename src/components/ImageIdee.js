import React, {Component} from 'react';
import {Formulaire} from "./Formulaire";

class ImageIdee extends Component {
    render() {
        return (
            <div className="row mb-2">
                <div className='col'>
                    <Formulaire/>
                </div>
                <div className="col d-flex flex-column justify-center-start align-items-center">
                    <img src="/fille.svg" className="img-fluid" alt="" />
                </div>
            </div>
        );
    }
}

export default ImageIdee