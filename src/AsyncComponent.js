import React, { Component } from "react";

export default (importComponent) => {

    class AsynComponent extends Component {
        state = {
            component: null
        }

        async componentDidMount(){
           const { default: component } = await importComponent();
           this.setState({
               component
           });
        }

        render() {
            
            const { component:Component } = this.state;
            return (
                Component? <Component {...this.props} /> : <div className="loader"></div>
            );
        }

    }

    return AsynComponent;

}