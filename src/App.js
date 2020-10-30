import "./styles/global.css";
import MainContainer from "./components/MainContainer";
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <div className="app">
      <Header />
      <MainContainer>
        <TaskBoard>
          <p>Task 1</p>
        </TaskBoard>
      </MainContainer>
    </div>
  );
}

export default App;
