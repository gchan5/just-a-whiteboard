import React, { Component } from 'react';
import AddCardButtonContainer from "../containers/AddCardButtonContainer.js";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="row vertical-align">
                    <div className="col-sm-10">
                        <h1 className="align-middle App-title">just a whiteboard</h1>
                    </div>
                    <div className="col-sm-2">
                        <AddCardButtonContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
