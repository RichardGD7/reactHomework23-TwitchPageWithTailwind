import CategoryList from "./components/CategoryList"
import NavBar from "./components/NavBar"
import StreamerList from "./components/StreamerList"

export default function App () {
  return(
    <main className="bg-black text-white min-h-screen">
      <NavBar />
      <div className="grid grid-cols-[250px_auto]">
        <StreamerList/>
        <CategoryList/>
      </div>
    </main>
  )
}