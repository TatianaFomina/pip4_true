var React = require('react');
var ReactDOM = require('react-dom');

class SignInForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: "", password: "", usrExists: false};
        this.onUsernameChange= this.onUsernameChange.bind(this);
        this.onPasswordChange= this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.check_user = this.check_user.bind(this);
    }

    handleSubmit(e){
        if(this.state.usrExists !== true){
            e.preventDefault();
            alert("Login or password is incorrect. \nPlease, try again");
            this.setState({username: "", password: ""});
        }

    }
    onUsernameChange(e){
        var val = e.target.value;
        this.check_user(val, this.state.password);
        this.setState({username: val});
    }

    check_user(username, password){
        var http_request = new XMLHttpRequest();
        if (window.XMLHttpRequest) {
            http_request = new XMLHttpRequest();
        }
        http_request.open('POST', "./check_user", true);
        http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var body = "username="+username+"&password="+password;
        http_request.send(body);
        http_request.onreadystatechange = function () {
            if(http_request.readyState === XMLHttpRequest.DONE && http_request.status === 200) {
                if (http_request.responseText === "true"){
                    this.setState({usrExists: true});
                }
                else {
                    this.setState({usrExists: false});
                }
            }
        }.bind(this);
    }
    onPasswordChange(e){
        var val = e.target.value;
        this.check_user(this.state.username, val);
        this.setState({password: val});

    }
    render(){
        return (
            <div id="return_form">
                <form name="sign_in_form" method="post" action="sign_in" onSubmit={this.handleSubmit}>
                    <h1>Sign in</h1><br/>
                    <span className="input"></span>
                    <input name="username" placeholder="Username" value={this.state.username} onChange={this.onUsernameChange} required></input>
                    <span className="input"></span>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} required/>
                    <button type="submit" value="Sign In" title="Submit form" className="icon-arrow-right"><span>Sign In</span></button>
                </form>
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        )
    }
}

ReactDOM.render(
    <SignInForm/>,
    document.getElementById("root")
);