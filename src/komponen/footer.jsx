// src/komponen/Footer.jsx
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ textAlign: "center", padding: "10px", background: "#eee" }}>
      <p>© {year} Hak Cipta - Vite Sinau</p>
    </footer>
  );
}

export default Footer;
