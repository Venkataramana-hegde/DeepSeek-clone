import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


const App = () => {
  return (
    <div className="flex">
      
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default App;
