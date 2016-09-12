import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { fetchTodos } from '../api';

class VisibleTodoLis extends Component {
    componentDidMount() {
        fetchTodos(this.props.filter).then( todos =>
            console.log(this.props.filter, todos)
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.filter !== prevProps.filter) {
            fetchTodos(this.props.filter).then( todos =>
                console.log(this.props.filter, todos)
            );
        }
    }

    render() {
        return <TodoList {...this.props}  />
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(
                t => t.completed
            );
        case 'active':
            return todos.filter(
                t => !t.completed
            );
        default:
            throw new Error('Unknown filter: ${filter}.');
    }
};

const mapStateToProps = (state, ownProps) => {
    const filter = ownProps.filter || 'all';
    return {
        todos: getVisibleTodos(state.todos, filter),
        filter,
    }
};

const VisibleTodoList = withRouter(connect(mapStateToProps, { onTodoClick: toggleTodo})(VisibleTodoLis));

// const mapStateToTodoListProps = (state, ownProps) => ({
//     todos: getVisibleTodos(
//         state.todos,
//         ownProps.filter
//     )
// });

// const mapDispatchToTodoListProps = (dispatch) => ({
//         onTodoClick(id) {
//             dispatch(toggleTodo(id))
//         }
// });

// const VisibleTodoList = connect(mapStateToTodoListProps, { onTodoClick: toggleTodo})(TodoList);

export default VisibleTodoList;
