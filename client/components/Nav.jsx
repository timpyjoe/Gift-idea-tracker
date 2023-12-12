import "./style.css"

export default function Nav({ links }) {
  return (

    <ul className="me-5 mx-5 bg-dark-subtle mt-5"
      style={{
        display: "flex",
        fontFamily: "Cooper Std",
        justifyContent: "space-between",
        text: "inline"
      }}>
      {links.map((link) => link)}
    </ul>

  );
}
{/* <ul className="text-center border border-1 border-danger"
        style={{
          display: "inline-flex", */}