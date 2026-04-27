import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);

  const addLink = () => {
    if (!title || !url) return;
    setLinks([...links, { title, url }]);
    setTitle("");
    setUrl("");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 20,
      fontFamily: "Arial"
    }}>
      <h1>🔥 LinkHub</h1>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Link Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={inputStyle}
      />

      <button onClick={addLink} style={buttonStyle}>
        Add Link
      </button>

      <h2 style={{ marginTop: 30 }}>
        {name ? `${name}'s Page` : "My Links"}
      </h2>

      <div style={{ width: "100%", maxWidth: 400 }}>
        {links.map((l, i) => (
          <a
            key={i}
            href={l.url}
            target="_blank"
            style={linkStyle}
          >
            🔗 {l.title}
          </a>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  maxWidth: 400,
  padding: 10,
  margin: 5,
  borderRadius: 8,
  border: "none"
};

const buttonStyle = {
  padding: 10,
  marginTop: 10,
  background: "#22c55e",
  border: "none",
  borderRadius: 8,
  cursor: "pointer"
};

const linkStyle = {
  display: "block",
  padding: 12,
  margin: 8,
  background: "#1e293b",
  color: "white",
  textDecoration: "none",
  borderRadius: 8
};