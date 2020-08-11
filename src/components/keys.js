import React from 'react'
import { withFocusable } from "@noriginmedia/react-spatial-navigation";



 function Keys({focused,item, keyPress }) {
   
    console.log("sdsdsd",focused)

    return (
              <button value={item} id={`key-${item}`} name="btn" className={`key  ${focused ? "key-focuse" : ""}`}
              onClick={keyPress}
              >{item}</button>
    )
}



const FocusableKeys = withFocusable({trackChildren: true})(Keys);
export default FocusableKeys;
