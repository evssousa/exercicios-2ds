import Filme from "./components/Filme" 

export default function App(){
  return(
    <div>
      <Filme 
        filme="matrix"
        ano="1999"
      />

      <Filme 
        filme="Spider-man"
        ano="2099"
      />

      <Filme 
        filme="a bruxa de blair"
        ano="2000"
      />      
    </div>
  )
}