import FormInput from "../../../assets/reused_components/form_input/form_input";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import FormButton from "../../../assets/reused_components/form_submit_button/form_submit_button";

export default function Bindemail() {

  const [email, setEmail] = useState("");

  const skip = useNavigate();

  function handleClick(){
    skip("/")
  }

  return (
    <div>
      <h1>绑定邮箱</h1>
      <FormInput
        placeholder={"填写邮箱"}
        bindFunc={(e) => { setEmail(e.target.value) }}
        value={email}
      />
      <br/>
      <FormButton
        value={"确认绑定"}
        bindFunc = {
          handleClick
        }
      />
    </div>
  )
}
