import React from 'react';
import './ConfigSetup.css';
class ConfigSetup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div class="form-group row">
                        <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm ">Tipo:</label>
                        <div class="col-sm-9 text-center">
                            <label>Barco de batalla 1</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Disposición:</label>
                        <div class="col-sm-9">
                            <button className="btn btn-outline-info m-1 btn-block" type="button">Vertical</button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="colFormLabelSm" class="col-sm-5 col-form-label col-form-label-sm">Coordenadas origen:</label>
                        <div class="col-sm-7 d-flex">
                            <input className="coordenadas m-1 form-control form-control-sm" type="number" placeholder="X"></input>
                            <input className="coordenadas m-1 form-control form-control-sm" type="number" placeholder="Y"></input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="colFormLabelSm" class="col-sm-5 col-form-label col-form-label-sm">Coordenadas destino:</label>
                        <div class="col-sm-7 d-flex">
                            <input className="coordenadas m-1 form-control form-control-sm" type="number" placeholder="X"></input>
                            <input className="coordenadas m-1 form-control form-control-sm" type="number" placeholder="Y"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <button className="btn btn-outline-primary m-1 btn-block" type="button">Desplegar</button>
                    </div>
                </form>
                <ul class="list-group">
                    <li class="list-group-item">barquito 1</li>
                    <li class="list-group-item">barquito 2</li>
                    <li class="list-group-item">barquito 3</li>
                </ul>

            </div>


        );
    }
}

export default ConfigSetup;
