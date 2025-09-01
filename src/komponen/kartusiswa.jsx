// src/komponen/KartuSiswa.jsx
function KartuSiswa({ nama, jurusan }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px", borderRadius: "6px" }}>
      <h3>{nama}</h3>
      <p>Jurusan: {jurusan}</p>
    </div>
  );
}

export default KartuSiswa;
