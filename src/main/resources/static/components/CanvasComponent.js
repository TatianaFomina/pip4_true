var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {r: 10, context: null};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(r = 10) {
        this.updateCanvas(r);
    }

    _onMouseMove(e) {
        this.setState({ x: e.screenX, y: e.screenY });
    }

    // Изменение x, проверка на пустоту, валидация
    onRCharge(r) {
        this.setState({r: r});
        this.updateCanvas(r);
    }

    handleClick(e) {
        e.preventDefault();
        var context = this.state.context;
        var r = this.state.r;
        var x = (e.nativeEvent.offsetX - 150) / r;
        var ex = e.nativeEvent.offsetX;
        var ey = e.nativeEvent.offsetY;
        var y = (-(e.nativeEvent.offsetY - 150)) / r;
        if ((x > 0) && (y < 0)){
            x = x - 0.5*r/10;
            y = y + 0.5*r/10;
        }
        if ((x < 0) && (y < 0)){
            x = x + 0.5*r/10;
            y = y + 0.5*r/10;
        }
        alert(ex + " " + ey + " ");

        var http_request = new XMLHttpRequest();
        if (window.XMLHttpRequest) {
            http_request = new XMLHttpRequest();
        }
        http_request.open('POST', "./addPoint", true);
        http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var body = "x=" + x + "&y=" + y + "&r=" + r;
        http_request.send(body);
        http_request.onreadystatechange = function () {
            if (http_request.readyState === XMLHttpRequest.DONE && http_request.status === 200) {
                if (http_request.responseText === "true") {
                    alert("Попадание");
                    context.beginPath();
                    context.arc(150 + x * (130/ r), 150 - y * (130/ r), 4, 0, 2 * Math.PI);
                    context.fillStyle = 'green';
                    context.fill();
                    context.lineWidth = 1;
                    context.strokeStyle = '#003300';
                    context.stroke()
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
                     context.beginPath();
                     context.arc(150 + x* (130/ r), 150 - y* (130/ r), 4, 0, 2 * Math.PI);
                     context.fillStyle = 'red';
                     context.fill();
                     context.lineWidth = 1;
                     context.strokeStyle = '#003300';
                     context.stroke();
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
    }

    updateCanvas(r) {
        const context = this.refs.canvas.getContext('2d');
        this.setState({r: r, context: context});
        //context.fillRect(150, 150, 65, 130);
        context.clearRect(0, 0, canvas.width, canvas.height);

        //прямоугольник
        context.beginPath();
        context.moveTo(150, 150);
        context.rect(85, 150, 65, 130);
        context.closePath();
        context.strokeStyle = "blue";
        context.fillStyle = "blue";
        context.strokeStyle = "#3d7bb0";
        context.fillStyle = "#3d7bb0";
        context.fill();
        context.stroke();

        // сектор
        context.beginPath();
        // context.moveTo(150, 20);
        context.moveTo(150, 150);
        context.arc(150, 150, 130, 1.5 * Math.PI, 0 * Math.PI);
        context.closePath();
        context.strokeStyle = "blue";
        context.fillStyle = "blue";
        context.strokeStyle = "#3d7bb0";
        context.fillStyle = "#3d7bb0";
        context.fill();
        context.stroke();

        //треугольник
        context.beginPath();
        context.moveTo(150, 280);
        context.lineTo(280, 150);
        context.lineTo(150, 150);
        context.lineTo(150, 280);
        context.closePath();
        context.strokeStyle = "blue";
        context.fillStyle = "blue";
        context.strokeStyle = "#3d7bb0";
        context.fillStyle = "#3d7bb0";
        context.fill();
        context.stroke();

        context.strokeStyle = "black";
        context.fillStyle = "black";
        //отрисовка осей
        context.beginPath();
        context.font = "10px Verdana";
        context.moveTo(150, 0);
        context.lineTo(150, 300);
        context.moveTo(150, 0);
        context.lineTo(145, 15);
        context.moveTo(150, 0);
        context.lineTo(155, 15);
        context.fillText("Y", 160, 10);
        context.moveTo(0, 150);
        context.lineTo(300, 150);
        context.moveTo(300, 150);
        context.lineTo(285, 145);
        context.moveTo(300, 150);
        context.lineTo(285, 155);
        context.fillText("X", 290, 135);
        //var r = 10;
        // деления X
        context.moveTo(145, 20);
        context.lineTo(155, 20);
        context.fillText(r, 160, 20);
        context.moveTo(145, 85);
        context.lineTo(155, 85);
        context.fillText((r / 2), 160, 78);
        context.moveTo(145, 215);
        context.lineTo(155, 215);
        context.fillText(-(r / 2), 160, 215);
        context.moveTo(145, 280);
        context.lineTo(155, 280);
        context.fillText(-r, 160, 280);
        // деления Y
        context.moveTo(20, 145);
        context.lineTo(20, 155);
        context.fillText(-r, 20, 170);
        context.moveTo(85, 145);
        context.lineTo(85, 155);
        context.fillText(-(r / 2), 70, 170);
        context.moveTo(215, 145);
        context.lineTo(215, 155);
        context.fillText((r / 2), 215, 170);
        context.moveTo(280, 145);
        context.lineTo(280, 155);
        context.fillText(r, 280, 170);

        context.closePath();
        context.strokeStyle = "black";
        context.fillStyle = "black";
        context.stroke();
    }

    render() {
        return (
            <canvas ref="canvas" onMouseMove={this._onMouseMove.bind(this)} width={300} height={300} onClick={this.handleClick}/>
        );
    }
}

// ReactDOM.render(<CanvasComponent/>, document.getElementById('canvas'));

export default CanvasComponent;