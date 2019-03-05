import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'


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
        console.log(this.props)
        this.props.addTodo(this.state.newTodo)
        this.setState({newTodo: ""})
    }

    render () {
       return (
        <>
         <div className="todo-list">
         {this.props.todos.map(todo => {
            return  <p key={todo.id}>
                {todo.value}
             </p>
         })}
         </div>
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

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps,{addTodo})(Todos);