var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
// var App =require( './PointsTable');
// var PointsTable = require('./PointsTable');
// var CoordForm = require ('./CoordForm');
// var CanvasComponent = require('./CanvasComponent');

import App from './PointsTable';
import PointsTable from './PointsTable';
import CoordForm from './CoordForm';
import CanvasComponent from './CanvasComponent';
class Container extends React.Component {

    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="row">
                <div className="col-sm-6" id="left_column">
                    <div id="plot-container">
                        <div className="col-sm-12" id="canvas">
                            <CanvasComponent/>
                        </div>
                    </div>

                </div>
                <div className="col-sm-6" id="right-column">
                    <div id="app">
                        <CoordForm x="-4" r="-4"/>
                    </div>
                    <div id='root'>
                        <App/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Container/>
    , document.getElementById('div_container'));
