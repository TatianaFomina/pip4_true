var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
import App from './PointsTable';
import PointsTable from './PointsTable';
import Point from './PointsTable';

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

        this.state = {x: x, y: y, r: r, yIsEmpty: true, yIsValid: yIsValid, rIsValid: rIsValid, xIsValid: xIsValid};
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
        // var valid = this.validateX(val);
        var valid = this.validateX(val);
        this.setState({x: val, xIsValid: valid});
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
        var val = e.target.value;
        var valid = this.validateX(val);
        this.setState({r: val, rIsValid: valid});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.xIsValid === true && this.state.yIsValid === true && this.state.rIsValid === true) {
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
                        alert("Попаданиеf");
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
                        alert("Не попалf");
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
                                <input type="checkbox" name="x" value="-4" id="x1" onChange={this.onXChange}/><label
                                className="form-check-label"
                                htmlFor="x1">
                                -4
                            </label>
                                <input type="checkbox" name="x" value="-3" id="x2" onChange={this.onXChange}/><label
                                className="form-check-label"
                                htmlFor="x2">
                                -3
                            </label>
                                <input type="checkbox" name="x" value="-2" id="x3" onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x3">
                                -2
                            </label>
                                <input type="checkbox" name="x" value="-1" id="x4" onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x4">
                                -1
                            </label>
                                <input type="checkbox" name="x" value="0" id="x5" onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x5">
                                0
                            </label>
                                <input type="checkbox" name="x" value="1" id="x6" onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x6">
                                1
                            </label>
                                <input type="checkbox" name="x" value="2" id="x7" onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x7">
                                2
                            </label>
                                <input type="checkbox" name="x" value="3" id="x8" onChange={this.onXChange}/><label
                                className="form-check-label" htmlFor="x8">
                                3
                            </label>
                                <input type="checkbox" name="x" value="4" id="x9" onChange={this.onXChange}/><label
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
                                <input type="checkbox" name="r" value="-4" id="r1" onChange={this.onRChange}/><label
                                className="form-check-label"
                                htmlFor="r1">
                                -4
                            </label>
                                <input type="checkbox" name="r" value="-3" id="r2" onChange={this.onRChange}/><label
                                className="form-check-label"
                                htmlFor="r2">
                                -3
                            </label>
                                <input type="checkbox" name="r" value="-2" id="r3" onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r3">
                                -2
                            </label>
                                <input type="checkbox" name="r" value="-1" id="r4" onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r4">
                                -1
                            </label>
                                <input type="checkbox" name="r" value="0" id="r5" onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r5">
                                0
                            </label>
                                <input type="checkbox" name="r" value="1" id="r6" onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r6">
                                1
                            </label>
                                <input type="checkbox" name="r" value="2" id="r7" onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r7">
                                2
                            </label>
                                <input type="checkbox" name="r" value="3" id="r8" onChange={this.onRChange}/><label
                                className="form-check-label" htmlFor="r8">
                                3
                            </label>
                                <input type="checkbox" name="r" value="4" id="r9" onChange={this.onRChange}/><label
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


ReactDOM.render(
    <CoordForm/>,
    document.getElementById("app")
);


