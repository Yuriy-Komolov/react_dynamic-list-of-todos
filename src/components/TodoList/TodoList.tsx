import classNames from 'classnames';
import { FC } from 'react';
import { Todo } from '../../types/Todo';

interface Prop {
  todos: Todo[];
  setTodoId: (id : number) => void
  todoId: number;
}

export const TodoList: FC<Prop> = ({
  todos,
  setTodoId,
  todoId,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map((todo) => {
        const {
          id,
          title,
          completed,
        } = todo;

        return (
          <tr
            data-cy="todo"
            key={id}
          >
            <td className="is-vcentered">{id}</td>
            <td className="is-vcentered">
              {completed && (
                <span className="icon" data-cy="iconCompleted">
                  <i className="fas fa-check" />
                </span>
              )}
            </td>
            <td className="is-vcentered is-expanded">
              <p
                className={
                  completed
                    ? 'has-text-success'
                    : 'has-text-danger'
                }
              >
                {title}
              </p>
            </td>
            <td className="has-text-right is-vcentered">
              <button
                data-cy="selectButton"
                className="button"
                type="button"
                onClick={() => setTodoId(id)}
              >
                <span className="icon">
                  <i className={classNames('far', {
                    'fa-eye': todoId !== id,
                    'fa-eye-slash': todoId === id,
                  })}
                  />
                </span>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);