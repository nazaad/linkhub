import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const studentLinks = [
    {
      title: "📘 Free Study Notes",
      url: "https://www.khanacademy.org/",
    },
    {
      title: "🤖 AI Study Tools",
      url: "https://chat.openai.com/",
    },
    {
      title: "📚 Online Courses",
      url: "https://www.coursera.org/",
    },
    {
      title: "✍️ Assignment Help Tools",
      url: "https://www.grammarly.com/",
    },
  ];

  const shoppingLinks = [
    {
      title: "🔥 Amazon Deals",
      url: "https://www.amazon.com/",
    },
    {
      title: "📱 Mobile Accessories",
      url: "https://www.amazon.com/s?k=mobile+accessories",
    },
    {
      title: "🎧 Headphones Deals",
      url: "https://www.amazon.com/s?k=headphones",
    },
    {
      title: "💻 Laptop Deals",
      url: "https://www.amazon.com/s?k=laptop",
    },
  ];

  return (
    <div style={styles.page}>
      <h1>🚀 My LinkHub</h1>

      <input
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      <h2>🎓 Student Study Tools</h2>

      {studentLinks.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          {item.title}
        </a>
      ))}

      <h2 style={{ marginTop: 30 }}>🛍️ Shopping Deals</h2>

      {shoppingLinks.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          {item.title}
        </a>
      ))}

      <h3 style={{ marginTop: 30 }}>
        {name ? `Welcome ${name} 👋` : "Welcome 👋"}
      </h3>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: 20,
    fontFamily: "Arial",
  },
  input: {
    padding: 10,
    width: "80%",
    maxWidth: 300,
    borderRadius: 8,
    border: "none",
    margin: 10,
  },
  link: {
    display: "block",
    width: "80%",
    maxWidth: 300,
    margin: "10px auto",
    padding: 12,
    background: "#1e293b",
    color: "white",
    textDecoration: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
};