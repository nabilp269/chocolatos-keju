// src/komponen/Profile.jsx
function Profile() {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "0.5vh",
      margin: "10vh",
      borderRadius: "10px",
      textAlign: "center"
    }}>
      <img
        src="https://asset.kompas.com/crops/p1eTdVDMgEPJ2IjXqfxPU-yUbHw=/0x0:4500x3000/1200x800/data/photo/2019/09/25/5d8b5e82e3c6b.jpg"
        alt="Foto Siswa"
        style={{
          borderRadius: "50%",
          width: "300px",     
          height: "200px",    
          objectFit: "cover"  
        }}
      />
      <h2>Nama: Arga</h2>
      <h2>Nama: Nabil</h2>
      <p>Jurusan: SIJA (Sistem Informasi Jaringan & Aplikasi)</p>
      <p>Hobi: Bukak Laptop</p>
    </div>
  );
}

export default Profile;
