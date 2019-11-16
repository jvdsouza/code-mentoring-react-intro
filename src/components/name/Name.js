import React from 'react';

const NameComponent = (props) => {
    return (
        <div>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Hello my name is {props.name} and I'm a {props.Career}
        </a>
      </div>
    )
}

export default NameComponent;