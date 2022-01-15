import './styles/common.css';
import Login from "./components/login/login.js";
import Register from "./components/register/register";
import Forget from "./components/forget/forget";
import Newpassword from './components/forget/newpassword/newpassword.js';
import Home from "./components/home/home.js"
import Hots from "./components/home/hots/hots.js";
import Questions from "./components/questions/questions.js";
import Repository from './components/repository/repository';
import Comment_section from './components/comment_section/comment_section';
import Bindemail from './components/register/bind_email/bindemail';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* element showing components  */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/bind_email" element={<Bindemail/>}></Route>
        <Route path="/forget" element={<Forget />}></Route>
        <Route path="/newpassword" element={<Newpassword />}></Route>
        <Route path="/home" element={<Home />}>
          <Route index element={<Hots />}></Route>
        </Route>
        <Route path="/comment_section" element={<Comment_section />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route parh="/repository" element={<Repository />}></Route>
        {/* <Route path="/Myspace" element={<Myspace/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App;
