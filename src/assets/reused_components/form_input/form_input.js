import moduleCss from "./form_input.module.css"

export default function FormInput(props) {

  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={moduleCss.input_0}
      onChange={props.bindFunc}
      value={props.value}
      id={props.id}
    />
  )
}
