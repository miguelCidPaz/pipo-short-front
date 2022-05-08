import Features from "../Features/Features"
import InputLink from "../InputLink/InputLink"
import PipoPubli from "../PipoPubli/PipoPubli"

const LandPage = () => {

    return (
        <section className="landpage--main">
            <InputLink />
            <PipoPubli />
            <Features />
        </section>
    )
}

export default LandPage