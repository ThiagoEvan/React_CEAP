import { Post } from "./Post"
import { Header } from "./Header"
import { Sliderbar } from "./Sliderbar"

export function App() {
  return (
    <>
       <Header/>
       <Sliderbar/>
       <Post author="Alef" content="Professor de DS44"/>
       <Post author="Eduardo" content="Estudante de React" />
       <Post author="Rafael" content="To tentando entender" />


    </>
  )
}


