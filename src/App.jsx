import Header from "./components/Header";
import Tombol from "./components/Tombol";

function App() {
  const numbers = [4, 5, 3, 2, 8, 10];
  const students = [
    {
      id: 1,
      name: "Mas Nyoman",
      nim: "111",
      alumnus: true,
    },
    {
      id: 2,
      name: "A Dedi",
      nim: "222",
      alumnus: false,
    },
    {
      id: 3,
      name: "Mas Dani",
      nim: "333",
      alumnus: false,
    },
  ];

  function handleClick() {
    alert("Pendaftaran ditutup.");
  }

  return (
    <>
      <Header logo="Andromeda" />
      <h1
        style={{
          color: "green",
          textDecoration: "underline",
        }}
      >
        Hello, universe!
      </h1>
      {numbers.map((n, i) => (
        <Tombol key={i}>Bilangan {n}</Tombol>
      ))}
      {students.map((s) => (
        <p key={s.id}>
          {s.name} ({s.nim}) {s.alumnus ? "sudah" : "belum"} lulus.
        </p>
      ))}
      <Tombol onClick={handleClick}>Buat Akun</Tombol>
    </>
  );
}

export default App;
