import "./styles/heading.css";
export default function Heading() {
  return (
    <div>
      <heading>
        <div className="heading-logo">
          <a href="/#" className="logo-heading">
            Case
          </a>
        </div>
        <ul>
          <li>
            <button className="button-heading">Videos</button>
          </li>
          <li>
            <button className="button-heading">Images</button>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search by title, tag, or date"
              className="search-box"
            />
          </li>
          <li>
            <button className="button-heading">Search</button>
          </li>
        </ul>
      </heading>
    </div>
  );
}
