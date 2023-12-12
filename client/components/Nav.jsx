import "./style.css"

export default function Nav({ links }) {
  return (
    <div className="nav-bar" style={{
      display: 'inline block',
      border: '1px solid green'
    }}>
      <ul >
        {links.map((link) => link)}
      </ul>
    </div>
  );
}
