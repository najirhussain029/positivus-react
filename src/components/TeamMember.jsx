export default function TeamMember({ name, role, image, bio }) {
  return (
    <article className="member">
      <div className="m-top">
        <img className="av" src={image} alt={name} />
        <div>
          <b>{name}</b>
          <br />
          {role}
        </div>
        <i className="in">in</i>
      </div>
      <p>{bio}</p>
    </article>
  );
}
