import React, {Component, Fragment} from "react";
import Aux from "../../hoc/Auxilory";
import './Person.css';
import WithClass from '../../hoc/WithClass'
import personImage from './personimage.png';
import PropTypes from 'prop-types'
import AuthContext from "../../Context/auth-context";

class Person extends Component {

    static contextType = AuthContext;

    render(){
        console.log('[Person.js] rendering...');

        return [
            //<div className = "Person">
            <Aux>
                {/* <AuthContext.Consumer>
                    {
                        context => context.authenticated ? <p>Authenticated!</p> : <p> Please Login</p>
                    }
                </AuthContext.Consumer> */}
                
                {this.context.authenticated ? <p>Authenticated :)</p> : <p> Please Login</p>}

                {/* {this.props.isAuthenicated ? <p>Welcome, {this.props.name}</p> : <p>Please Login</p> } */}
                <img key="item1" src={personImage} alt="Person" width="50px" height="50px" />
                <p key="item2" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p key="item3">{this.props.children}</p>
                <input key="item4" type="text" value={this.props.name} onChange={this.props.change}/>
           </Aux>
            //</div>
        ];
      //  );
    }
}

// Person.propTypes = {
//     click: PropTypes.func,
//     change: PropTypes.func,
//     name: PropTypes.string,
//     age: PropTypes.number
// };

export default WithClass(Person, "Person");
