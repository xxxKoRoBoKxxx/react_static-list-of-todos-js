import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.forEach(todo => {
        <TodoInfo todo={todo} key={todo.id} />;
      })}
    </section>
  );
};
