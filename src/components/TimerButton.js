import React, { Component } from 'react';

export default class Timer extends Component {
    render() {
        return(
            <div className=" row">
                <div className="col-6"><span><button type="submit" className="btn btn-block btn-danger btn-primary mt-3">Arrêter le Timer</button></span></div>
                <div className="col-6"><span><button type="submit" className="btn btn-block btn-warning btn-primary mt-3">Redémarrer le Timer</button></span></div>
            </div> 
        )
    }
}