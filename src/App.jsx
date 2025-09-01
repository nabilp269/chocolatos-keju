import React from 'react';
import Header from './komponen/header.jsx';
import Footer from './komponen/footer.jsx';
import Profile from './komponen/profile.jsx';
import KartuSiswa from './komponen/kartusiswa.jsx';
import JamSekarang from './komponen/jamSekarang.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>WELCOME SINAU VITE BERSAMA KAMI</h1>
        <p>By Kepo!...</p>

        {/* Profile */}
        <Profile />

        {/* 3 Kartu Siswa */}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <KartuSiswa nama="Arga" jurusan="SIJA" />
          <KartuSiswa nama="Nabil" jurusan="SIJA" />
          <KartuSiswa nama="Aliando" jurusan="TJAT" />
        </div>

        {/* Jam Sekarang */}
        <JamSekarang />
      </main>
      <Footer />
    </div>
  );
}

export default App;
  