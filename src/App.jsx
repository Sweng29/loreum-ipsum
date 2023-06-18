import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { data, socialLinks, links } from "./data";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={viteLogo} className="logo" alt="logo" />
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div
            className="links-container"
            ref={linksContainerRef}
            style={linkStyles}
          >
            <ul className="links" ref={linksRef}>
              {links.map((linkElement) => {
                const { id, url, title } = linkElement;
                return (
                  <li key={id}>
                    <a href={url}>{title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {socialLinks.map((socilaLink) => {
              const { id, url, icon } = socilaLink;
              return (
                <li key={id}>
                  <a href={url}>{socilaLink.icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <section className="main-section">
        <h1>Loreum Ipsum Generator</h1>
        <div className="card">
          <form onSubmit={handleSubmit} className="lorem-form">
            <label
              htmlFor="generateNumber"
              className="lorem-form label"
              id="generateNumber"
            >
              Paragraphs:
            </label>
            <input
              className="lorem-form input"
              type="number"
              name="inputNumber"
              onChange={(e) => setCount(e.target.value)}
              id="inputNumber"
              value={count}
              min={1}
              max={data.length}
            />
            <button type="submit" className="btn">
              Generate
            </button>
          </form>
          <div className="lorem-text">
            {text.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
