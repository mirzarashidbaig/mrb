
import './App.css'
import Data from './Data';
import Card from './Card';
function App() {
  
// function ncard(cur){
 
// }
  return (
    
      <>

      <div className="heading">
        <h1>Top Best Netflix Series </h1>
      </div>
      <div className="Cardsdiv">

        {
          Data.map((cur)=>{

            return <Card
             key = {cur.index}
             image = {cur.image}
             heading = {cur.Heading}
             des = {cur.des}
             link = {cur.link}
            
            />
          })
        }
        
      </div>
       
      </>
  )
}

export default App
