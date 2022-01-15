import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export default function FormButton(props){
  const FormButton = withStyles({
    root: {
      background: 'rgb(144,173,255)',
      borderRadius: 3,
      border: 0,
      color: '#000',
      height: '4.5rem',
      width:'15.5rem',
      boxShadow: '0.1rem 0.1rem 0.2rem rgba(0, 0, 0, .3)',
      fontSize:'2rem',
      fontWeight: 'bold',
      borderRadius:'2.25rem',
      boxSizing: 'border-box',
      '&:hover':{
        background: 'rgb(144,173,255)',
      }
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  return(
    <FormButton onClick={props.bindFunc}>{props.value}</FormButton>
  )
}
