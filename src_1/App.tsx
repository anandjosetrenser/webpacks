// import { Counter } from './Counter'
import logo from '../public/image/enlitic-logo.png'

export const App = () => {
  return (
    <>
      {process.env.REACT_APP_PLACE}
      <h1>Welocome to react, Happy haing</h1>
      <img src={logo} alt="fghgf" />
      <img src="/asset/image/enlitic-logo.png" alt="fghgf" />
    </>
  )
}
