var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Point = createReactClass({
    getInitialState: function () {
        return {display: true};
    },
    handleDelete() {
        var self = this;
        $.ajax({
            url: self.props.point._links.self.href,
            type: 'DELETE',
            success: function (result) {
                self.setState({display: false});
                store.dispatch({
                    type: 'POINT_LIST_SUCCESS',
                    points: response.data
                });
            },
            error: function (xhr, ajaxOptions, thrownError) {
                toastr.error(xhr.responseJSON.message);
            }
        });
    },
    render: function () {
        if (this.state.display == false) return null;
        else {
            return (
                <tr>
                    <td>{this.props.point.x}</td>
                    <td>{this.props.point.y}</td>
                    <td>{this.props.point.r}</td>
                    <td>{this.props.point.status ? 'OK' : 'NOT'}</td>
                </tr>);
        }
    }
});

var PointsTable = createReactClass({
    render: function () {
        var rows = [];
        this.props.points.forEach(function (point) {
            rows.push(<Point point={point}/>);
        });
        return (
            <table className="col-sm-offset-1 col-sm-10 col-lg-10 col-xs-12 table table-striped">
                <thead>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>STATUS</th>
                </tr>
                </thead>
                <tbody id='table-point' >{rows}</tbody>
            </table>
        );
    }
});

var App = createReactClass({
    loadPointsFromServer: function () {
        var self = this;
        $.ajax({
            url: "http://localhost:8080/api/points"
        }).then(function (data) {
            self.setState({points: data._embedded.points});
        });
    },

    getInitialState: function () {
        return {points: []};
    },

    componentDidMount: function () {
        this.loadPointsFromServer();
    },

    updateData(config) {
        this.setState(config);
    },

    render() {
        return ( <PointsTable points={this.state.points}/> );
    }
});


ReactDOM.render(
    <App/>
    , document.getElementById('root'));
