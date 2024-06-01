import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

import ButtonMenu from "./components/ButtonMenu"

const Menu = ({ router }: { router: AppRouterInstance }) => {

    const redirect = (route: string) => {
        router.push(`/${route}`)
    }

    return (
        <div className="h-3/4 flex items-center justify-around flex-col">
            <ButtonMenu text="INICIAR" route='juego' func={redirect} />
            <ButtonMenu text="CATEGORIAS" route='categorias' func={redirect} />
            <ButtonMenu text="OPCIONES" route='opciones' func={redirect} />
            <ButtonMenu text="ESTADÍSTICAS" route='estadisticas' func={redirect} />
        </div>
    )
}

export default Menu