import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  // CLICK TRACKER
  const handleClick = (title, url) => {
    // simple tracking (you can later connect Google Analytics)
    console.log("Clicked:", title);

    // optional local storage tracking
    const data = JSON.parse(localStorage.getItem("clicks") || "[]");
    data.push({ title, time: new Date().toISOString() });
    localStorage.setItem("clicks", JSON.stringify(data));

    window.open(url, "_blank");
  };

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

  const amazonLinks = [
    {
      title: "🔥 Amazon Best Deals",
      url: "https://www.amazon.com/?tag=YOUR_AFFILIATE_ID",
    },
    {
      title: "📱 Mobile Accessories",
      url: "https://www.amazon.com/s?k=mobile+accessories&tag=YOUR_AFFILIATE_ID",
    },
    {
      title: "🎧 Headphones Deals",
      url: "https://www.amazon.com/s?k=headphones&tag=YOUR_AFFILIATE_ID",
    },
    {
      title: "💻 Student Laptop Deals",
      url: "https://www.amazon.com/s?k=laptop&tag=YOUR_AFFILIATE_ID",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>💰 LinkHub Money Dashboard</h1>

        <input
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <p style={{ opacity: 0.7 }}>
          {name ? `Welcome ${name} 👋` : "Welcome 👋"}
        </p>
      </div>

      {/* STUDY SECTION */}
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

      {/* AMAZON SECTION */}
      <h2 style={{ marginTop: 30 }}>🛍️ Amazon Deals (Earn Money)</h2>
      {amazonLinks.map((item, i) => (
        <button
          key={i}
          onClick={() => handleClick(item.title, item.url)}
          style={{ ...styles.button, background: "#f59e0b" }}
        >
          {item.title}
        </button>
      ))}

      <p style={{ marginTop: 30, fontSize: 12, opacity: 0.6 }}>
        ⚡ Tip: Replace YOUR_AFFILIATE_ID with your Amazon affiliate tag
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
    padding: 12,
    width: "80%",
    maxWidth: 300,
    borderRadius: 10,
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
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
};