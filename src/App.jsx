import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const handleClick = (title, url) => {
    console.log("Clicked:", title);

    const data = JSON.parse(localStorage.getItem("clicks") || "[]");
    data.push({ title, time: new Date().toISOString() });
    localStorage.setItem("clicks", JSON.stringify(data));

    window.open(url, "_blank");
  };

  // 🎓 STUDENT LINKS
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
      title: "✍️ Grammarly Writing Tool",
      url: "https://www.grammarly.com/",
    },
  ];

  // 🛍️ YOUR AFFILIATE LINKS (EDIT HERE)
  const shoppingLinks = [
    {
      title: "🎧 Headphones Deals",
      url: "https://s.click.aliexpress.com/e/_c4b8yIt1",
    },
    {
      title: "📱 Mobile Accessories",
      url: "#",
    },
    {
      title: "💻 Laptop Accessories",
      url: "#",
    },
    {
      title: "🔥 Best Deals",
      url: "#",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>💰 Nazaad LinkHub</h1>

        <input
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <p>{name ? `Welcome ${name} 👋` : "Welcome 👋"}</p>
      </div>

      <h2>🎓 Student Study Tools</h2>
      {studentLinks.map((item, i) => (
        <button
          key={i}
          onClick={() => handleClick(item.title, item.url)}
          style={styles.button}
        >
          {item.title}
        </button>
      ))}

      <h2 style={{ marginTop: 30 }}>🛍️ Shopping Deals</h2>
      {shoppingLinks.map((item, i) => (
        <button
          key={i}
          onClick={() => handleClick(item.title, item.url)}
          style={{ ...styles.button, background: "#f59e0b" }}
        >
          {item.title}
        </button>
      ))}

      <p style={{ marginTop: 20, fontSize: 12, opacity: 0.6 }}>
        💡 Tip: Add more affiliate links to increase earnings
      </p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    textAlign: "center",
    padding: 20,
    fontFamily: "Arial",
  },
  card: {
    background: "#111827",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  input: {
    padding: 10,
    width: "80%",
    maxWidth: 300,
    borderRadius: 8,
    border: "none",
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    display: "block",
    width: "90%",
    maxWidth: 350,
    margin: "10px auto",
    padding: 15,
    background: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: 12,
    fontSize: 16,
    cursor: "pointer",
    fontWeight: "bold",
  },
};