

// const WithClass = props => {
//     return(<div className={props.classes}>
//         {props.children}
//     </div>);
// }

const WithClass = (WrappedComponent, classNameArg) => {
    return props => (
        <div className={classNameArg}> 
            <WrappedComponent {...props}/>
        </div>
         
    );
}

export default WithClass;