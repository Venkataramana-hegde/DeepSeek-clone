import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <div className="flex">
      
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default App;
