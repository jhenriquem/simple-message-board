import Board from "./components/board";
import Header from "./components/header";

function App() {

  return (
    <main className="w-[35rem] bg-slate-50 rounded-xl p-4 flex flex-col items-center justify-between">
      <Header />
      < Board />
    </main>
  )
}
export default App
