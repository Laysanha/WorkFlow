import { AuthProvider } from "./contexts/authRegister";
import { Routes } from "./routes";


function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  )
}
export default App

// (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Login/>}/>
//       <Route path="*" element={<Login/>}/>
//       <Route path="/Cadastro" element={<Register/>}/>
//       <Route path="/Dashboard" element={<Dashboard/>}/>
//     </Routes>
//   </BrowserRouter>
// )