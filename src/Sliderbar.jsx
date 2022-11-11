import { PencilLine } from "phosphor-react";

export function Sliderbar() {
    return(
        <aside>
            <img src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            alt="" />

            <div>
                <img src="https://avatars.githubusercontent.com/u/45666190?v=4" 
                alt="Imagem Thiago" />
                <strong> Thiago Evangelista</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="">
                    <PencilLine size = {20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}