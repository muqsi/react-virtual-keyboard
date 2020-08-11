import React from 'react'
import { withFocusable } from "@noriginmedia/react-spatial-navigation";



 function Delete({focused,item,deletePress }) {
   
    console.log("sdsdsd", focused)

    return (
        
            //   <button value={item} id={`key-${item}`} name="btn" className={`key  ${focused ? "key-focuse" : ""}`}>{item}</button>

              <button type="button" value="" 
              onClick={deletePress}
              id="key-delete" name="btn" className={`key delete ${focused ? "key-focuse" : ""}`} >⌫</button>
      
    )
}



const FocusableDelete = withFocusable({trackChildren: true})(Delete);
export default FocusableDelete;
