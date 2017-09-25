/**
 * Created by ajaynair on 1/24/17.
 */

import React from 'react';
import {render} from 'react-dom';

export default class Player extends React.Component {
    render() {
        return (
            <div className="panel panel-default panel-primary">
                <div className="panel-heading">
                    {this.props.playerName}
                </div>
                <div className="panel-body">
                    <div className="player">
                        <i className="glyphicon glyphicon-user"></i>
                    </div>
                </div>
            </div>
        );
    }
}
