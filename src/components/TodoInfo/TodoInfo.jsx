export const TodoInfo = ({ todo }) => {
  console.log('jklj');

  const { user, completed, title } = todo;

  return (
    <article className={`TodoInfo${completed && ' TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      <a className="UserInfo" href={user.email}>
        {user.title}
      </a>
    </article>
  );
};
