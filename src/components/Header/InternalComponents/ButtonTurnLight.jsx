import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Button } from '@mui/material';

const ButtonTurnLight = (props) => {

    return(
        <Button className='header--button-light' onClick={e => props.turnLight(props.theme)}
        style={{
            fontSize:"10px",
            borderRadius:"100%",
            width:"10px",
            backgroundColor:"transparent",
            color: props.theme === "light" ? "grey" : "blue",
        }}>
            {props.theme === "light" 
            ? <LightbulbIcon /> 
            : <LightbulbOutlinedIcon/>}
        </Button>
        
    )
}

export default ButtonTurnLight