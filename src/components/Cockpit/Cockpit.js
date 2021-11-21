import Radium from "radium";
import React, { memo, useContext, useEffect, useRef } from "react"
import AuthContext from "../Context/auth-context";
import academyLogo from './Ankura Academy.jpg';

const Cockpit = (props) => {

   // const changeButtonColor = useRef();

    const authContext = useContext(AuthContext);

    // 1. This will be renderd only if changes occurs in persons
    useEffect(() => {

     // changeButtonColor.current.click();

      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
        //alert("Data Saved to Cloud!");
      }, 1000);

      return () => {
        console.log("[Cockpit.js] cleanup work in 1st useEffect");
      }
    }, [props.persons]);

    // 2. This will rendered only for first time
    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      setTimeout(() => {
        //alert("Data Saved to Cloud!");
      }, 1000);
      
      return () => {
        console.log("[Cockpit.js] cleanup work in 2nd useEffect");
      }
    }, []);

    // 3. This will be rendered every time
    useEffect(() => {
      console.log('[Cockpit.js] 3rd useEffect');
      setTimeout(() => {
        //alert("Data Saved to Cloud!");
      }, 1000);

      
      return () => {
        console.log("[Cockpit.js] cleanup work in 3rd useEffect");
      }
    });

    let buttontext = "Show Persons";
    
     // Button style
     const buttonStyle = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        pdding: '8px',
        cursor: 'pointer',
        // Works only if we install 3rd party package (Ex: Radium)
        ':hover' : {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      }

    if(props.showPersons){
        buttonStyle.backgroundColor = 'red';
        buttontext = 'Hide Persons';
         // Changing Button Style on Hover
        buttonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return(
        <div>
            <img src={academyLogo} alt="Ankura Academy" width="100px" height="50px" />
            <h1>{props.title}</h1>
            <p className={props.classes.join(' ')}>I'm Working Perfectly!</p>
            <button style={buttonStyle} onClick={props.togglePersonsHandler}>{buttontext}</button>
            {/* <AuthContext.Consumer>
              {context => <button onClick={context.login}>Login </button>}

            </AuthContext.Consumer> */}

            <button onClick={authContext.login}>Login </button>

            {/* <button onClick={props.login}>Login</button> */}
        </div>
    );
}

export default memo(Radium(Cockpit));