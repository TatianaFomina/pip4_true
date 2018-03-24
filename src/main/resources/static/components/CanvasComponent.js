var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

class CanvasComponent extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const context = this.refs.canvas.getContext('2d');
        context.fillRect(150, 150, 65, 130);
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
        var r = 10;
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
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}

ReactDOM.render(
    <CanvasComponent/>
    , document.getElementById('canvas'));