import { Post } from "./components/Post"
import { Header} from './components/Header'
import { Sidebar } from "./components/Sidebar"

import './global.css'

import styles from './App.module.css'


export function App() {
  return (
  <>
  <div>
    <Header />
  </div>
  
    <div className={styles.wrapper}>
       <Sidebar />

       <div>
          <Post author="Alef" content="Professor de DS44"/>
          <Post author="Eduardo" content="Estudante de React" />
          <Post author="Rafael" content="To tentando entender" />
       </div>
    </div>
  </>
  )
}


