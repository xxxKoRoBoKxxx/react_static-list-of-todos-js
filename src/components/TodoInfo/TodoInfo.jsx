import classNames from 'classnames';

export const TodoInfo = ({ todo }) => {
  const { user, completed, title } = todo;

  return (
    <article
      className={classNames('TodoInfo', { 'TodoInfo--completed': completed })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (
        <a className="UserInfo" href={user.email}>
          {user.name}
        </a>
      )}
    </article>
  );
};
