var React = require('react');
var ReactDOM = require('react-dom');

class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        var password1 = props.password1;
        var password2 = props.password2;
        var password2IsValid = this.validatePassword2(password1, password2);
        var usernameIsValid = true;
        this.state={login: "", password1: "", password2: "", p2Valid: password2IsValid, usrNameValid: usernameIsValid};

        //this.check_equals = this.check_equals.bind(this);
        this.onLoginChange= this.onLoginChange.bind(this);
        this.onPassword1Change= this.onPassword1Change.bind(this);
        this.onPassword2Change= this.onPassword2Change.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onLoginChange(e) {
        var val = e.target.value;
        var http_request = new XMLHttpRequest();
        if (window.XMLHttpRequest) {
            http_request = new XMLHttpRequest();
        }
        http_request.open('POST', "./check_username", true);
        http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http_request.send("username="+val);
        http_request.onreadystatechange = function () {
            if(http_request.readyState === XMLHttpRequest.DONE && http_request.status === 200) {
                if (http_request.responseText === "true"){

                    this.setState({login: val, usrNameValid: false});
                    alert("Such username already exists");
                }
                else {
                    this.setState({login: val, usrNameValid: true});

                }
            }
        }.bind(this);
    }

    onPassword1Change(e) {
        var val = e.target.value;
        var password2IsValid = this.validatePassword2(val, this.state.password2);
        this.setState({password1: val, p2Valid: password2IsValid});
    }

    onPassword2Change(e) {
        var val = e.target.value;
        var password2IsValid = this.validatePassword2(this.state.password1, val);
        this.setState({password2: val, p2Valid: password2IsValid});
    }

    validatePassword2(password1, password2){
        return password1===password2;
    }

    handleSubmit(e) {

        if(this.state.p2Valid !== true){
            e.preventDefault();
            alert("Incorrect password!");
        }

        if(this.state.usrNameValid !== true){
            e.preventDefault();
            alert("Such username already exists");
        }

    }
    render(){
        var password2Id = this.state.p2Valid===true?"password2":"p2Invalid";
        var loginId = this.state.usrNameValid===true?"login":"p2Invalid";
        return(
            <div>
                <form method="post" action="./register" onSubmit={this.handleSubmit}>
                    <h1>Sign up</h1><br/>
                    <span className="input"></span>
                    <input type="text" name="username" placeholder="Username" id={loginId} value={this.state.login} onChange={this.onLoginChange} required/>
                    <label id = "error_label1" hidden> Error</label>
                    <span id="passwordMeter"></span>
                    <input type="password" name="password" id="password1" placeholder="Password" value={this.state.password1} onChange={this.onPassword1Change} required/>
                    <span className="input"></span>
                    <input type="password" placeholder="Retype password" id={password2Id} value={this.state.password2}  onChange={this.onPassword2Change} required />
                    <span hidden>Incorrect password</span>
                    <button type="submit" value="Sign Up" title="Submit form" className="icon-arrow-right"><span>Sign up</span></button>
                </form>
            </div>
    )
    }
}

//export default SignUpForm;

ReactDOM.render(
    <SignUpForm password1="" password2=""/>,
    document.getElementById("root")
);