import React, { useEffect, useState } from 'react';
import { withFocusable, initNavigation } from "@noriginmedia/react-spatial-navigation";
import './App.css';
import Keys from './components/keys';
import Delete from './components/delete';
import Space from './components/space';
// import Lang from  './components/language'
initNavigation();
const languages = ["ENG", "FRN", "ARB"]
const englishUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "J", "L", "M", "N", "O", "P", "Q", "R", "D", "T", "U", "V", "W", "X", "Y", "Z"]
const englishLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const frenchUpper = ["A", "À", "B", "C", "Ç", "D", "E", "È", "É", "F", "G", "H", "I", "J", "J", "L", "M", "N", "O", "P", "Q", "R", "D", "T", "U", "Ù", "V", "W", "X", "Y", "Z"]
const frenchLower = ["a", "à", "b", "c", "ç", "d", "e", "è", "é", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "ù", "v", "w", "x", "y", "z"]
const arabic = ["أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "هـ", "و", "ي"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const symbols = ["`", "'", `""`, ":", ":", "~", "-", "_", "=", "?", "/", "|", "*", "!", "@", "#", "$", "%", "^", "&", "(", ")", "{", "}", "[", "]", "<", ">"]


function App({ setFocus, focused }) {
  useEffect(() => {
    console.log(".....................", setFocus)
    setFocus('key-el-a')
  }, [])

  const [sentences, setSentences] = useState([])
  const [data, setData] = useState("")
  const [layout, setLayout] = useState(englishLower)

  const keyEnterPress = ({ item }) => {
    console.log("item:", item)
    setData(data + item)
  };
  const spacePress = ({ item }) => {
    // console.log("item:", item)
    setData(data + " ")
  };

  const keyPress = (e) => {
    console.log("value", e.target.value)
    setData(data + e.target.value)
  }

  const LangSelect = ({ item }) => {
    //  console.log("object", item)
    if (item == "FRN") {
      setLayout(frenchUpper)
    }
    else if (item == 'ARB') {
      setLayout(arabic)
    }
    else if (item == 'ENG') {
      setLayout(englishLower)
    }

  }

  const deletePress = (e) => {
    let testData = data
    setData(testData.slice(0, -1))
  }


  return (
    <>
      <input type="text" name="" id="key-screen" className="screen" placeholder="Search" value={data} />
      <div className="keyboard">
        <div className="row">
          <Space focusKey={`key-space`} key={`key-space`}
            keyPress={keyPress}
            onEnterPress={spacePress}
          />
          {englishLower.map((item) => {
            return (
              <Keys
                keyPress={keyPress}
                focusKey={`key-el-${item}`} item={item} key={`key-el-${item}`}
                onEnterPress={keyEnterPress}
              />
            )
          })
          }
          <Delete focusKey={`key-delete`} key={`key-delete`} id="key-delete" name="btn" deletePress={deletePress}
            onEnterPress={deletePress}
          />
        </div>
        <div className="row">

          {englishUpper.map((item) => {
            return (
              <Keys
                keyPress={keyPress}
                focusKey={`key-eu-${item}`} item={item} key={`key-eu-${item}`}
                onEnterPress={keyEnterPress}
              />
            )
          })
          }

        </div>
        <div className="row">

          {frenchLower.map((item) => {
            return (
              <Keys
                keyPress={keyPress}
                focusKey={`key-fl-${item}`} item={item} key={`key-fl-${item}`}
                onEnterPress={keyEnterPress}
              />
            )
          })
          }

        </div>
        <div className="row">

          {frenchUpper.map((item) => {
            return (
              <Keys
                keyPress={keyPress}
                focusKey={`key-ar-${item}`} item={item} key={`key-ar-${item}`}
                onEnterPress={keyEnterPress}
              />
            )
          })
          }

        </div>
        <div className="row">

          {arabic.map((item) => {
            return (
              <Keys
                keyPress={keyPress}
                focusKey={`key-${item}`} item={item} key={`key-${item}`}
                onEnterPress={keyEnterPress}
              />
            )
          })
          }

        </div>
        <div className="row">

          {symbols.map((item) => {
            return (
              <Keys
                keyPress={keyPress}
                focusKey={`key-${item}`} item={item} key={`key-${item}`}
                onEnterPress={keyEnterPress}
              />
            )
          })
          }

        </div>
        <div className="row">

          {numbers.map((item) => {
            return (
              <Keys
                keyPress={keyPress}
                focusKey={`key-${item}`} item={item} key={`key-${item}`}
                onEnterPress={keyEnterPress}
              />
            )
          })
          }

        </div>

        {/* <div class="row">
        {languages.map((item) => {
            return (
              <Lang
              focusKey={`key-${item}`} item={item} key={`key-${item}`} 
              onEnterPress={LangSelect}  
              />
            )
          })
          }
        </div>  */}

      </div>
    </>
  );
}

const FocusableApp = withFocusable({ trackChildren: true })(App);
export default FocusableApp;
