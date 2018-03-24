var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
class CoordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x: "", y: "", r: ""};

        this.onXChange = this.onXChange.bind(this);
        this.onYChange = this.onYChange.bind(this);
        this.onRChange = this.onRChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Изменение x, на всякий пожарный для всех надо сделать
    onXChange(e) {
        var val = e.target.value;
        this.setState({x: val});
    }

    onYChange(e) {
        var val = e.target.value;
        this.setState({y: val});
    }
    onRChange(e) {
        var val = e.target.value;
        this.setState({r: val});
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Y: " + this.state.y + "X: " + this.state.x + "R: " + this.state.r);
    }

    render() {
        return (
            <div className="row form-container">
                <div className="col-sm-8 col-sm-offset-2">
                    <form method="post" action="" onSubmit={this.handleSubmit}>
                        <h3>Enter point coordinates</h3>
                        <div className="form-group" id="Coord">
                            <div className=" form-check ">
                                <p className="float-left"><b>X coordinate:</b></p>
                                <input type="checkbox" name="x" value="-4" id="x1" onChange={this.onXChange}/><label className="form-check-label"
                                                                                           htmlFor="x1">
                                -4
                            </label>
                                <input type="checkbox" name="x" value="-3" id="x2" onChange={this.onXChange}/><label className="form-check-label"
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
                                    <p ><b>Y coordinate:</b></p>
                                    <input type="text" value={this.state.y} className="form-control" id="inputY"
                                           placeholder="y" onChange={this.onYChange}/>
                                </div>

                            <br/>
                            <div className=" form-check ">
                                <p><b>Radius:</b></p>
                                <input type="checkbox" name="r" value="-4" id="r1" onChange={this.onRChange}/><label className="form-check-label"
                                                                                           htmlFor="r1">
                                -4
                            </label>
                                <input type="checkbox" name="r" value="-3" id="r2" onChange={this.onRChange}/><label className="form-check-label"
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
                                <p><input id="submit" type="submit" className="submit pull-right" value="Submit"/>
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
    <CoordForm />,
    document.getElementById("app")
);


