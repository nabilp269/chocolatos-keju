// src/komponen/JamSekarang.jsx
import { useState, useEffect } from "react";

function JamSekarang() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ margin: "15px", fontWeight: "bold" }}>
      Waktu Sekarang: {time.toLocaleTimeString()}
    </div>
  );
}

export default JamSekarang;
