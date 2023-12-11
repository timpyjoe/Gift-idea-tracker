import "./style.css"

export default function Nav({ links }) {
  return (

    <ul >
      {links.map((link) => link)}
    </ul>

  );
}
