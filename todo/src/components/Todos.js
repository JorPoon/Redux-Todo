import React from 'react'
import {connect} from 'react-redux'
import {addTodo, toggleTodo} from '../actions'
import './Todos.css'


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

    toggleTodo = id => {
        this.props.toggleTodo(id)
    }

  
    render () {
        console.log(this.props)
       return (
        <>
         <div className="todo-list">
         {this.props.todos.map(todo => {
            return  <p key={todo.id} onClick={()=> this.toggleTodo(todo.id)} className={todo.completed? "text" : null}>
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
            <button>Delete Todo</button>
        </form>
            
        </>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps,{addTodo, toggleTodo})(Todos);