import React from "react"

class User extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            userInfo:{
                name:"Dummy",
                location:"Europe",
                email:"SGVS@dhn.m"
            }
        };
    }
    
    async componentDidMount(){
        this.timer1 = setInterval(()=>{
            this.setState(prevState =>({secondPassed:prevState.secondPassed+1}));
        },1000);
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo:json,
            secondPassed:0
        });
    }
   componentWillUnmount(){
        if (this.timer1) {
            clearInterval(this.timer1);
        }
   }
    render(){
        const {name ,location,email}=this.state.userInfo;
        return (
            <div className = "m-2 border-2 p-2">
                <h3>Name: {name}</h3>
                <h4>Location: {location}</h4>
                <h4>Email: {email!=null?email:"Not Present"}</h4>
                <h4>Second Passeds {this.state.secondPassed}</h4>
            </div>
        )
    }
}

export default User;