import './App.css';
import Persons from '../components/Persons/Persons'
import { Component } from 'react';
import Radium from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../components/hoc/WithClass';
import Aux from '../components/hoc/Auxilory';
import AuthContext from '../components/Context/auth-context';

class App extends Component{

  // 1st state in life cycle
  constructor(props){
    super(props);
    console.log('[App.js] construcotr');
  }
  

  // 5th statge in life cycle
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    // If we return false, component never be updated
    return true;
  }

  state = {
    persons : [
      { id: 100, name: "Raviteja Dasari", age: 25},
      { id: 101, name: 'Hema Spandana Galakatla', age: 26},
      { id: 102, name: 'Himanshi Goel', age: 30}
    ],
    showPersons: false,
    showCockpit: true,
    isAuthenicated : false
  }

   // 2nd stage in life cycle
   static getDesiredStateFromProps(props,state){
    console.log('[App.js] getDesiredStateFromProps');
    return state;
  }

  swithNameHandler = (newName) => {
    this.setState({
      persons : [
        { id: 100, name: newName, age: 25},
        { id: 101, name: 'Pinky', age: 26},
        { id: 102, name: 'HG', age: 30}
      ],
      showPersons: false
    })
  }

  // Changes names on change of input box
  // event is not passed automatically if we pass additional argument
  changedNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const personsArr = this.state.persons

    personsArr[personIndex] = person;

    this.setState({persons : personsArr})
  }

  
  togglePersonsHandler = () => {
    const doesDisplay = this.state.showPersons;
    this.setState({
      showPersons: !doesDisplay
    });     
  }

  deletePersonHandler = (personIndex) => {
    const personArr = this.state.persons.slice();
    personArr.splice(personIndex,1);
    this.setState({
      persons: personArr
    })
  }

  loginHandler = () => {
    this.setState({
      isAuthenicated: true
    })
  }

  render(){

    console.log('[App.js] render');

    let persons = null;

    // Preparing Persons Content only if showPersons is TRUE
    if(this.state.showPersons){
      persons = (
        //<div>
          <Persons 
          persons = {this.state.persons} 
          deletePersonHandler = {this.deletePersonHandler} 
          changedNameHandler = {this.changedNameHandler} 
          isAuthenicated = {this.state.isAuthenicated}
          />
       //</div>
      );
      
    }

    // Dyamically adding classes 
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red')
    }

    if(this.state.persons.length <= 1){
      classes.push('bold')
    }

    // Document Title
    document.title = 'Persons App';

    return (
      //<div className="App">
   //   <WithClass classes="App">
     <Aux>
        <button onClick={ () => this.setState({showCockpit: false})}>Remove Cockpit</button>
        
        <AuthContext.Provider value={{
            authenticated: this.state.isAuthenicated,
            login: this.loginHandler
          }}> 
          {this.state.showCockpit ? 
            <Cockpit title={this.props.appTitle} 
              classes={classes} 
              persons = {this.state.persons}
              showPersons={this.state.showPersons} 
              togglePersonsHandler={this.togglePersonsHandler}
              //login = {this.loginHandler}
              />
            :      
            null}
            {persons} 
      </AuthContext.Provider>
     </Aux>
     // </WithClass>
     // </div>   
    );
  }

} 


export default WithClass(App, "App");
