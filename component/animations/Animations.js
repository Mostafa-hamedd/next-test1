import { useEffect, useState} from "react"
import { gsap } from "gsap";  
function Animations() { 
  const [show, setShow] = useState(true);
  const onEnter =  ({currentTarget}) => {
    gsap.to(currentTarget , {
      backgroundColor : "#e77614" ,
      scal : 1.2,
      duration : 2
    })
  }
  const onLeave  =  ({currentTarget}) => {  
    gsap.to(currentTarget , {
      backgroundColor : "red" ,
      color : "#FFF",
      scal : 1.2,
      duration : 2
    })  
  } 
  return ( 
    <> 
      <div className="box"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}>
          Hover Me
      </div>  
    </>
  )
}

export default Animations;