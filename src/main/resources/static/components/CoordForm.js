var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
import App from './PointsTable';
import PointsTable from './PointsTable';
import Point from './PointsTable';
import CanvasComponent from './CanvasComponent';

class CoordForm extends React.Component {
    constructor(props) {
        super(props);
        var y = props.y;
        var yIsValid = this.validateY(y);
        var x = props.x;
        var xIsValid = this.validateX(x);
        // массив одинаков, поэтому я решила не париться, а просто этой же функцией валидировать
        // Да здравствует говнокод!
        var r = props.r;
        var rIsValid = this.validateX(r);

        this.state = {x: x, y: y, r: r, yIsEmpty: true, yIsValid: yIsValid, rIsValid: rIsValid,
            xIsValid: xIsValid, x1Checked: true, x2Checked: false, x3Checked: false, x4Checked: false,
            x5Checked: false, x6Checked: false, x7Checked: false, x8Checked: false, x9Checked: false,
            r1Checked: true, r2Checked: false, r3Checked: false, r4Checked: false,
            r5Checked: false, r6Checked: false, r7Checked: false, r8Checked: false, r9Checked: false};
        this.onXChange = this.onXChange.bind(this);
        this.onYChange = this.onYChange.bind(this);
        this.onRChange = this.onRChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateY(y) {
        return y >= -3 && y <= 3;
    }

    validateX(x) {
        var arr = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
        x = parseInt(x);
        return arr.indexOf(x) != -1;
    }

    // Изменение x, проверка на пустоту, валидация
    onXChange(e) {
        var val = e.target.value;
        var id = e.target.id;
        //alert(id);
        var valid = this.validateX(val);
        switch (id){
            case 'x1' :
                this.setState({x: val, xIsValid: valid, x1Checked: true, x2Checked: false, x3Checked: false,
                    x4Checked: false, x5Checked: false, x6Checked: false, x7Checked: false, x8Checked: false, x9Checked: false});
                break;
            case 'x2' :
                this.setState({x: val, xIsValid: valid, x1Checked: false, x2Checked: true, x3Checked: false,
                    x4Checked: false, x5Checked: false, x6Checked: false, x7Checked: false, x8Checked: false, x9Checked: false})
                break;
            case 'x3' :
                this.setState({x: val, xIsValid: valid, x1Checked: false, x2Checked: false, x3Checked: true,
                    x4Checked: false, x5Checked: false, x6Checked: false, x7Checked: false, x8Checked: false, x9Checked: false})
                break;
            case 'x4' :
                this.setState({x: val, xIsValid: valid, x1Checked: false, x2Checked: false, x3Checked: false,
                    x4Checked: true, x5Checked: false, x6Checked: false, x7Checked: false, x8Checked: false, x9Checked: false})
                break;
            case 'x5' :
                this.setState({x: val, xIsValid: valid, x1Checked: false, x2Checked: false, x3Checked: false,
                    x4Checked: false, x5Checked: true, x6Checked: false, x7Checked: false, x8Checked: false, x9Checked: false})
                break;
            case 'x6' :
                this.setState({x: val, xIsValid: valid, x1Checked: false, x2Checked: false, x3Checked: false,
                    x4Checked: false, x5Checked: false, x6Checked: true, x7Checked: false, x8Checked: false, x9Checked: false})
                break;
            case 'x7' :
                this.setState({x: val, xIsValid: valid, x1Checked: false, x2Checked: false, x3Checked: false,
                    x4Checked: false, x5Checked: false, x6Checked: false, x7Checked: true, x8Checked: false, x9Checked: false})
                break;
            case 'x8' :
                this.setState({x: val, xIsValid: valid, x1Checked: false, x2Checked: false, x3Checked: false,
                    x4Checked: false, x5Checked: false, x6Checked: false, x7Checked: false, x8Checked: true, x9Checked: false})
                break;
            case 'x9' :
                this.setState({x: val, xIsValid: valid, x1Checked: false, x2Checked: false, x3Checked: false,
                    x4Checked: false, x5Checked: false, x6Checked: false, x7Checked: false, x8Checked: false, x9Checked: true})
                break;
        }
        // var valid = this.validateX(val);


    }

    onYChange(e) {
        var val = e.target.value;
        //alert(this.state.yIsEmpty);
        if (e.target.value.trim().length > 0) {
            this.setState({yIsEmpty: false})
        } else {
            this.setState({yIsEmpty: true})
        }
        var valid = this.validateY(val) && this.state.yIsEmpty;
        this.setState({y: val, yIsValid: valid});
    }

    onRChange(e) {
        var canvas = CanvasComponent;
        var val = e.target.value;
        var id = e.target.id;
        var valid = this.validateX(val);
        switch (id){
            case 'r1' :
                this.setState({r: val, rIsValid: valid, r1Checked: true, r2Checked: false, r3Checked: false,
                    r4Checked: false, r5Checked: false, r6Checked: false, r7Checked: false, r8Checked: false, r9Checked: false});
                break;
            case 'r2' :
                this.setState({r: val, rIsValid: valid, r1Checked: false, r2Checked: true, r3Checked: false,
                    r4Checked: false, r5Checked: false, r6Checked: false, r7Checked: false, r8Checked: false, r9Checked: false})
                break;
            case 'r3' :
                this.setState({r: val, rIsValid: valid, r1Checked: false, r2Checked: false, r3Checked: true,
                    r4Checked: false, r5Checked: false, r6Checked: false, r7Checked: false, r8Checked: false, r9Checked: false})
                break;
            case 'r4' :
                this.setState({r: val, rIsValid: valid, r1Checked: false, r2Checked: false, r3Checked: false,
                    r4Checked: true, r5Checked: false, r6Checked: false, r7Checked: false, r8Checked: false, r9Checked: false})
                break;
            case 'r5' :
                this.setState({r: val, rIsValid: valid, r1Checked: false, r2Checked: false, r3Checked: false,
                    r4Checked: false, r5Checked: true, r6Checked: false, r7Checked: false, r8Checked: false, r9Checked: false})
                break;
            case 'r6' :
                this.setState({r: val, rIsValid: valid, r1Checked: false, r2Checked: false, r3Checked: false,
                    r4Checked: false, r5Checked: false, r6Checked: true, r7Checked: false, r8Checked: false, r9Checked: false})
                break;
            case 'r7' :
                this.setState({r: val, rIsValid: valid, r1Checked: false, r2Checked: false, r3Checked: false,
                    r4Checked: false, r5Checked: false, r6Checked: false, r7Checked: true, r8Checked: false, r9Checked: false})
                break;
            case 'r8' :
                this.setState({r: val, rIsValid: valid, r1Checked: false, r2Checked: false, r3Checked: false,
                    r4Checked: false, r5Checked: false, r6Checked: false, r7Checked: false, r8Checked: true, r9Checked: false})
                break;
            case 'r9' :
                this.setState({r: val, rIsValid: valid, r1Checked: false, r2Checked: false, r3Checked: false,
                    r4Checked: false, r5Checked: false, r6Checked: false, r7Checked: false, r8Checked: false, r9Checked: true})
                break;
        }
        //var canvas = CanvasComponent;
        CanvasComponent.state.onRChange(val);
        //this.setState({r: val, rIsValid: valid});
    }

    handleSubmit(e) {
        e.preventDefault();
        // if (!this.state.yIsValid)
        //     alert("y value must be between -3 and 3");
        if (/*this.state.xIsValid === true && */this.state.yIsValid === true/* && this.state.rIsValid === true*/) {
            var http_request = new XMLHttpRequest();
            if (window.XMLHttpRequest) {
                http_request = new XMLHttpRequest();
            }
            http_request.open('POST', "./addPoint", true);
            http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            var x = this.state.x;
            var y = this.state.y;
            var r = this.state.r;
            var body = "x=" + x + "&y=" + y + "&r=" + r;
            var table = Point;
            http_request.send(body);
            http_request.onreadystatechange = function () {
                if (http_request.readyState === XMLHttpRequest.DONE && http_request.status === 200) {
                    if (http_request.responseText === "true") {
                        alert("Попадание");
                        $("#table-point").append("<tr>" +
                            "<td>" + x + "</td>" +
                            "<td>" + y + "</td>" +
                            "<td>" + r + "</td>" +
                            "<td>OK</td>" +
                            "<td>" +
                            "</td>" +
                            "</tr>");
                    }
                    else {
                        alert("Не попал");
                        $("#table-point").append("<tr>" +
                            "<td>" + x + "</td>" +
                            "<td>" + y + "</td>" +
                            "<td>" + r + "</td>" +
                            "<td>NOT</td>" +
                            "<td>" +
                            "</td>" +
                            "</tr>");
                    }
                }
            }.bind(this);
            //alert(data);
            //alert("Y: " + this.state.y + " X: " + this.state.x + " R: " + this.state.r);
        }
        // alert("Y: " + this.state.y + " X: " + this.state.x + " R: " + this.state.r);

    }

    render() {
        var yColor = this.state.yIsValid === true ? "#9DF69C" : "#F6A19C";
        return (
            <div className="row form-container">
                <div className="col-sm-8 col-sm-offset-2">
                    <form method="post" action="" onSubmit={this.handleSubmit}>
                        <h3>Enter point coordinates</h3>
                        <div className="form-group" id="Coord">
                            <div className=" form-check ">
                                <p className="float-left"><b>X coordinate:</b></p>
                                <input type="checkbox" name="x" value="-4" id="x1" checked={this.state.x1Checked} onChange={this.onXChange}/><label
                                className="form-check-label"
                                htmlFor="x1">
                                -4
                            </label>
                                <input type="checkbox" name="x" value="-3" id="x2" checked={this.state.x2Checked} onChange={this.onXChange}/><label
                                className="form-check-label"
                                htmlFor="x2">
                                -3
                            </label>
                                <input type="checkbox" name="x" value="-2" id="x3" checked={this.state.x3Checked} onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x3">
                                -2
                            </label>
                                <input type="checkbox" name="x" value="-1" id="x4" checked={this.state.x4Checked} onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x4">
                                -1
                            </label>
                                <input type="checkbox" name="x" value="0" id="x5" checked={this.state.x5Checked} onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x5">
                                0
                            </label>
                                <input type="checkbox" name="x" value="1" id="x6" checked={this.state.x6Checked} onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x6">
                                1
                            </label>
                                <input type="checkbox" name="x" value="2" id="x7" checked={this.state.x7Checked} onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x7">
                                2
                            </label>
                                <input type="checkbox" name="x" value="3" id="x8" checked={this.state.x8Checked} onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x8">
                                3
                            </label>
                                <input type="checkbox" name="x" value="4" id="x9" checked={this.state.x9Checked} onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x9">
                                4
                            </label>
                            </div>
                            <br/>

                            <div className="">
                                <p><b>Y coordinate:</b></p>
                                <input type="text" value={this.state.y} className="form-control" id="inputY"
                                       placeholder="y" onChange={this.onYChange} style={{borderColor: yColor}}/>
                            </div>

                            <br/>
                            <div className=" form-check ">
                                <p><b>Radius:</b></p>
                                <input type="checkbox" name="r" value="-4" id="r1"  checked={this.state.r1Checked} onChange={this.onRChange}/><label
                                className="form-check-label"
                                htmlFor="r1">
                                -4
                            </label>
                                <input type="checkbox" name="r" value="-3" id="r2" checked={this.state.r2Checked} onChange={this.onRChange}/><label
                                className="form-check-label"
                                htmlFor="r2">
                                -3
                            </label>
                                <input type="checkbox" name="r" value="-2" id="r3" checked={this.state.r3Checked} onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r3">
                                -2
                            </label>
                                <input type="checkbox" name="r" value="-1" id="r4" checked={this.state.r4Checked} onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r4">
                                -1
                            </label>
                                <input type="checkbox" name="r" value="0" id="r5" checked={this.state.r5Checked} onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r5">
                                0
                            </label>
                                <input type="checkbox" name="r" value="1" id="r6" checked={this.state.r6Checked} onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r6">
                                1
                            </label>
                                <input type="checkbox" name="r" value="2" id="r7" checked={this.state.r7Checked} onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r7">
                                2
                            </label>
                                <input type="checkbox" name="r" value="3" id="r8" checked={this.state.r8Checked} onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r8">
                                3
                            </label>
                                <input type="checkbox" name="r" value="4" id="r9" checked={this.state.r9Checked}onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r9">
                                4
                            </label>

                                <br/>
                                <p><input id="submit" type="submit"
                                          className="submit pull-right" value="Submit"/>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


// ReactDOM.render(
//     <CoordForm x="-4" r="-4"/>,
//     document.getElementById("app")
// );

export default CoordForm;
