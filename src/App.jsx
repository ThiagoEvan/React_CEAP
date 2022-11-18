import { Post } from "./components/Post"
import { Header} from './components/Header'
import './global.css'

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div className={styles.wrapper}>
       <Header />
       <Sidebar />
       <Post author="Alef" content="Professor de DS44"/>
       <Post author="Eduardo" content="Estudante de React" />
       <Post author="Rafael" content="To tentando entender" />


    </div>
  )
}


