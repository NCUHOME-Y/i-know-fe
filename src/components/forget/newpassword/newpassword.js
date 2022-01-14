import "./newpassword.css";
import { useNavigate } from "react-router-dom";
import FormButton from "../../../assets/reused_components/form_submit_button";

export default function Newpassword() {

  const skip = useNavigate();

  function handleReset(){
    //待添加重置密码逻辑
    skip("/")
  }

  return (
    <div className="newpassword_bk">
      <h1 className="newpassword_header">重置密码</h1>
      <div className="newpassword_layout">
        <div>
          <input placeholder="输入新的密码" className="newpassword_input"></input>
          <br/><br/>
          <input placeholder="确认密码" className="newpassword_confirm"></input>
        </div>
        <FormButton bindFunc={handleReset} text={"确定"}/>
      </div>
    </div>
  )
}
