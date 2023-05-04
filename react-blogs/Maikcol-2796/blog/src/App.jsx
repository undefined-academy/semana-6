import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Aside } from "./components/Aside";
import { Posts } from "./components/Posts";

const entries = [
  {
    id: 1,
    title: "Mi primer post",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque nihil placeat magnam voluptate dignissimos! Aspernatur nobis eum tempore accusamus?",
  },
  {
    id: 2,
    principal: true,
    title: "Mi segundo post",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque nihil placeat magnam voluptate dignissimos! Aspernatur nobis eum tempore accusamus?",
  },
  {
    id: 3,
    title: "Mi tercer post",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque nihil placeat magnam voluptate dignissimos! Aspernatur nobis eum tempore accusamus?",
  },
  {
    id: 4,
    title: "Mi cuarto post",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque nihil placeat magnam voluptate dignissimos! Aspernatur nobis eum tempore accusamus?",
  },
];
function App() {
  return (
    <>
      <div>
        <Header title="Mi Blog"></Header>
        <main>
          <Aside entries={entries}></Aside>
          <Posts entries={entries}></Posts>
        </main>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
