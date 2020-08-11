import React from 'react'
import { withFocusable } from "@noriginmedia/react-spatial-navigation";



 function Language({focused,item }) {
   
    console.log("sdsdsd",focused)

    return (
              <button  className={`key space ${focused ? "key-focuse" : ""}`}
              >{item}</button>
    )
}



const FocusableLanguage = withFocusable({trackChildren: true})(Language);
export default FocusableLanguage;
