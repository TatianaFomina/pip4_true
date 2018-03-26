var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
import App from './PointsTable';
import PointsTable from './PointsTable';
import CoordForm from './CoordForm';
import CanvasComponent from './CanvasComponent';
class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {r: "10"};
        this.updateShared = this.updateShared.bind(this);
    }
    // getInitialState: function(){
    //     return {r: "-4"};
    // },
    updateShared (value) {
        this.setState({r: value});

    }
    render(){
        return(
            <div className="row">
                <div className="col-sm-6" id="left_column">
                    <div id="plot-container">
                        <div className="col-sm-12" id="canvas">
                            <CanvasComponent r={this.state.r} updateShared={this.updateShared}/>
                        </div>
                    </div>

                </div>
                <div className="col-sm-6" id="right-column">
                    <div id="app">
                        <CoordForm x="-4" r={this.state.r} updateShared={this.updateShared}/>
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
