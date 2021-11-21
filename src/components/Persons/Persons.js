import React, { Component, PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends Component {

    // constructor(props){
    //     super(props);
    //     this.inputElementRef = React.createRef();
    // }

     static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        // Compare previous state with next state to check if update requires
        // DO NOT HARD CODE
        console.log('[Persons.js] shouldUpdateComponent');

        // if(nextProps.persons !== this.props.persons){
        //     return true;
        // }else{
        //     return false;
        // }

        return true;
    }

    componentDidUpdate(){
        console.log("[Persons.js] componentDidUpdate");
        // this.inputElementRef.current.focus();
    }

    render(){
    console.log('[Persons.js] rendering...');

        return (
            this.props.persons.map((person, index) => {
                return (<Person 
               // ref={(inputEl) => {this.inputElement = inputEl}}
                // ref={this.inputElementRef}
                click={() => this.props.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                key={person.id}  
                change={(event) => this.props.changedNameHandler(event, person.id)}
                isAuthenicated = {this.props.isAuthenicated}
                />)
            })
        );
    }
} 

export default Persons;