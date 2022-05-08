import Banner from "./Internal-components/Banner"
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Features = () => {

    /**
     * databaseText, arrowsFast, statsLine, stopImage
     */

    const databaseText = 'Ningun dato personal ni ningun trackeo'
    const arrowFast = 'Rapidez ante todo, sin esperas innecesarias'
    const statsLine = 'Conoce las estadisticas que generan tus enlaces'
    const stopImage = 'Sin ninguna publicidad ni popup ni banner ajeno a pipo-short'

    const data = [
        {name:'0 datos Personales', image:StorageOutlinedIcon, text:databaseText },
        {name:'A tu velocidad', image:FastForwardOutlinedIcon, text:arrowFast},
        {name:'Stats para tus links', image:SsidChartOutlinedIcon, text:statsLine},
        {name:'Sin publicidad', image:CancelOutlinedIcon, text:stopImage}
    ]


    return (
        <section id="features--main">
            
            <Banner data={data}/>

        </section>
    )
}

export default Features