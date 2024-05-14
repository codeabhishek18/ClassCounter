import React from 'react';

class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            count : 0
        }
    }

    increment = () =>
    {
        this.setState(prev=> ({count : prev.count+1}));
    }

    decrement = () =>
    {
        this.setState(prev => ({count : prev.count-1}));
    }

    render()
    {
        return(
            <div style={{margin: '10px'}}>
                <h1>Counter App</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={()=> this.increment()}>Increment</button>
                <button onClick={()=> this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter;