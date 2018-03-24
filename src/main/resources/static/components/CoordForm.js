var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
class CoordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x: "", y: "", r: ""};

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Изменение x, на всякий пожарный для всех надо сделать
    onChange(e) {
        var val = e.target.value;
        this.setState({x: val});
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Y: " + this.state.y);
    }

    render() {
        return (
            <form method="post" action="" onSubmit={this.handleSubmit}>
                <div class="form-group" id="Coord">
                    <div class="row form-check col-sm-10">
                        <p><b>Введите X:</b></p>
                        <input type="checkbox" name="x" value="-4" id="x1"/><label class="form-check-label"
                                                                                   for="x1">
                        -4
                    </label>
                        <input type="checkbox" name="x" value="-3" id="x2"/><label class="form-check-label"
                                                                                   for="x2">
                        -3
                    </label>
                        <input type="checkbox" name="x" value="-2" id="x3"/><label
                        class="form-check-label" for="x3">
                        -2
                    </label>
                        <input type="checkbox" name="x" value="-1" id="x4"/><label
                        class="form-check-label" for="x4">
                        -1
                    </label>
                        <input type="checkbox" name="x" value="0" id="x5"/><label
                        class="form-check-label" for="x5">
                        0
                    </label>
                        <input type="checkbox" name="x" value="1" id="x6"/><label
                        class="form-check-label" for="x6">
                        1
                    </label>
                        <input type="checkbox" name="x" value="2" id="x7"/><label
                        class="form-check-label" for="x7">
                        2
                    </label>
                        <input type="checkbox" name="x" value="3" id="x8"/><label
                        class="form-check-label" for="x8">
                        3
                    </label>
                        <input type="checkbox" name="x" value="4" id="x9"/><label
                        class="form-check-label" for="x9">
                        4
                    </label>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-sm-10">
                            <label for="inputY" value={this.state.y}  class="col-sm-2 col-form-label">Введите Y:</label>
                            <input type="text" class="form-control" id="inputY" placeholder="Введите Y"/>
                        </div>
                    </div>
                    <br/>
                    <div class="row form-check col-sm-10">
                        <p><b>Введите R:</b></p>
                        <input type="checkbox" name="r" value="-4" id="r1"/><label class="form-check-label"
                                                                                   for="r1">
                        -4
                    </label>
                        <input type="checkbox" name="r" value="-3" id="r2"/><label class="form-check-label"
                                                                                   for="r2">
                        -3
                    </label>
                        <input type="checkbox" name="r" value="-2" id="r3"/><label
                        class="form-check-label" for="r3">
                        -2
                    </label>
                        <input type="checkbox" name="r" value="-1" id="r4"/><label
                        class="form-check-label" for="r4">
                        -1
                    </label>
                        <input type="checkbox" name="r" value="0" id="r5"/><label
                        class="form-check-label" for="r5">
                        0
                    </label>
                        <input type="checkbox" name="r" value="1" id="r6"/><label
                        class="form-check-label" for="r6">
                        1
                    </label>
                        <input type="checkbox" name="r" value="2" id="r7"/><label
                        class="form-check-label" for="r7">
                        2
                    </label>
                        <input type="checkbox" name="r" value="3" id="r8"/><label
                        class="form-check-label" for="r8">
                        3
                    </label>
                        <input type="checkbox" name="r" value="4" id="r9"/><label
                        class="form-check-label" for="r9">
                        4
                    </label>

                        <br/>
                        <p><input type="submit" class="btn btn-success" value="Отправить"/></p>
                    </div>
                </div>
            </form>
        );
    }
}


// var Point = createReactClass({
//     getInitialState: function () {
//         return {display: true};
//     },
//     handleDelete() {
//         var self = this;
//         $.ajax({
//             url: self.props.point._links.self.href,
//             type: 'DELETE',
//             success: function (result) {
//                 self.setState({display: false});
//             },
//             error: function (xhr, ajaxOptions, thrownError) {
//                 toastr.error(xhr.responseJSON.message);
//             }
//         });
//     },
//     render: function () {
//         if (this.state.display == false) return null;
//         else
//             return (
//                 <tr>
//                     <td>{this.props.point.x}</td>
//                     <td>{this.props.point.y}</td>
//                     <td>{this.props.point.r}</td>
//                     <td>{this.props.point.status}</td>
//                     <td>
//                         <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
//                     </td>
//                 </tr>);
//     }
// });
// var PointsTable = createReactClass({
//     render: function () {
//         var rows = [];
//         this.props.points.forEach(function (point) {
//             rows.push(<Point point={point}/>);
//         });
//         return (
//             <table className="col-sm-offset-1 col-sm-10 col-lg-10 col-xs-12 table table-striped">
//                 <thead>
//                 <tr>
//                     <th>X</th>
//                     <th>Y</th>
//                     <th>R</th>
//                     <th>STATUS</th>
//                     <th>Удаление</th>
//                 </tr>
//                 </thead>
//                 <tbody>{rows}</tbody>
//             </table>
//         );
//     }
// });
// var App = createReactClass({
//     loadPointsFromServer: function () {
//         var self = this;
//         $.ajax({
//             url: "http://localhost:8080/api/points"
//         }).then(function (data) {
//             self.setState({points: data._embedded.points});
//         });
//     },
//
//     getInitialState: function () {
//         return {points: []};
//     },
//
//     componentDidMount: function () {
//         this.loadPointsFromServer();
//     },
//
//     render() {
//         return ( <PointsTable points={this.state.points}/> );
//     }
// });
ReactDOM.render(
    <CoordForm />,
    document.getElementById("app")
);

// ReactDOM.render(
//     <App/>
//     , document.getElementById('root'));
