import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:1
        }
    }

    render(){
        const {name,location} = this.props;

        return (
            <div>
                <h1>
                    {this.state.count}
                </h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Click</button>
            </div>
        )
    }
}

export default UserClass;