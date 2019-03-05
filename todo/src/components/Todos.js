import React from 'react'
import {Connect} from 'react-redux'


 class Todos extends React.Component {
    state= {
        newTodo: "",
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo)
        this.setState({newTodo: ""})
    }

    render () {
       return (
        <>
         <form onSubmit={this.addTodo}>
            <input 
                type="text"
                name="newTodo"
                value={this.state.newTodo}
                placeholder="What do you need to do?"
                onChange={this.handleChanges}
            />
            <button onClick={this.addTodo}>Add Todo</button>
        </form>
        </>
        )
    }
}


export default Todos;