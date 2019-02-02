import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>This is info : {props.info}</p>
    </div>
)

const withAdminWarning=(WrappedComponent)=>{
    return (props)=> (
        <div>
            <p>This is a privilidged content. Please dont share</p>
            <WrappedComponent {...props} />
        </div>
    )
}
const requireAuthentication=(WrappedComponent)=>{
    return (props)=> (
        <div>
            {props.isAuthenticated? (
                <WrappedComponent {...props}/>
            ):(
                <p>Sorry we cant render this component</p>
            )}
        </div>
    )
}
const AuthUser=requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info='There are the details'/>,document.getElementById('app'));
ReactDOM.render(<AuthUser isAuthenticated={false} info='There are details of auth user'/>,document.getElementById('app'));