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
        this.state = {r: "10", IsValid: true};
        this.handleScroll = this.handleScroll.bind(this);
        this.updateShared = this.updateShared.bind(this);
    }

    // getInitialState: function(){
    //     return {r: "-4"};
    // },

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    updateShared(value) {
        this.setState({r: value});
    }

    handleScroll() {
        if (this.state.IsValid) {
            this.setState({IsValid: false});
        } else {
            this.setState({IsValid: true});
        }
    }

    render() {
        var sColor = this.state.IsValid === true ? "#9DF69C" : "#F6A19C";
        return (
            <div>
                <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse"
                                    data-target=".navbar-collapse">
                                <span class="sr-only">Toggle navigation</span>
                                <a id="log-out" href="./index" onclick="goOut()"><span
                                    class="glyphicon glyphicon-off"></span> Log out</a>
                            </button>
                            <a class="navbar-brand" style={{color: sColor}}>Tatiana Fomina, Ksenia Subbotina | Lab4
                                v7661</a>
                        </div>
                        <div class="collapse navbar-collapse">

                            <ul class="nav navbar-nav navbar-right">
                                <li class="active"><a disabled>Hello </a></li>
                                <li><a href="./go_out" onclick="goOut()"><span class="glyphicon glyphicon-off"></span>
                                    Log out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6" id="left_column">
                        <div id="plot-container">
                            <div className="col-sm-12" id="canvas">
                                <CanvasComponent r={this.state.r} updateShared={this.updateShared}/>
                                <CanvasComponent r={this.state.r} updateShared={this.updateShared}/>
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
            </div>
        )
    }
}

ReactDOM.render(
    <Container/>
    , document.getElementById('div_container'));
