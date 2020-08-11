import React from 'react'
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
 function Space({focused, keyPress}) {
    console.log("sdsdsd", focused)
    return (
        <button type="button" value=" "  className={`key space control ${focused ? "key-focuse" : ""}`}     id="key-space"
         onClick={keyPress}
         >space</button>
      
    )
}



const FocusableSpace = withFocusable({trackChildren: true})(Space);
export default FocusableSpace;
