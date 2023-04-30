import Main from './layouts/Main'
import Index from './pages/Index'
import apiUrl from '../api'


function App() {
/*   console.log(apiUrl)
  console.log(process.env.NODE_ENV) */

  return (

    <>
    <Main>
      <Index/>
      </Main>
    </>

    )
  }

export default App

/* PascalCase - Ejemplo
Index
Button
Card
Carousel
FormRegister
*/