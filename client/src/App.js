import FloatingShape from "./components/FloatingShape";
import { Routes , Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-900 to-emerald-900 
   flex items-center justify-center relative overflow-hidden">

    <FloatingShape
    color="bg-green-500"
    size="w-64 h-64"
    left="10%"
    top="-5%"
    delay={0}
    
    />
    <FloatingShape
    color="bg-emerald-500"
    size="w-48 h-48"
    left="80%"
    top="70%"
    delay={5}

    />
    <FloatingShape
    color="bg-lime-500"
    size="w-32 h-32"
    left="-10%"
    top="40%"
    delay={2}

    />

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>

   </div>
  );
}

export default App;
