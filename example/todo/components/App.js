import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

const App = ({ params }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter} />
    <Footer />
  </div>
)

export default App;
