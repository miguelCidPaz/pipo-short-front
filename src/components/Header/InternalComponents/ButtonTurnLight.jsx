import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Button } from '@mui/material';

const ButtonTurnLight = (props) => {

    return(
        <Button className='header--button-light' onClick={e => props.turnLight(props.theme)}
        style={{
            borderRadius:"100%",
            padding:"2vh",
            backgroundColor:"transparent",
            color: props.theme === "light" ? "grey" : "blue",
            boxShadow:"1px 1px 5px #b6b5b5, 1px 1px 3px inset white"
        }}>
            {props.theme === "light" 
            ? <LightbulbIcon /> 
            : <LightbulbOutlinedIcon/>}
        </Button>
        
    )
}

export default ButtonTurnLight