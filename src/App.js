import React, { useState, useEffect } from "react";
import "./App.css"
import Select from "./Components/Select";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';


function App() {
  //list for rendering another items
  const [selectList, setSelectList] = useState([
    { id: uuidv4(), leftSelect: "Choose", rightSelect: "Choose" },
  ]);

 const array1 = useSelector(state => state.array1)
 
 const array2 = useSelector(state => state.array2)

  const [left, setLeft] = useState(array1);                //for left option
  const [right, setRight] = useState(array2);               //for right option
  const [restore1, setRestore1] = useState([]);
  const [restore2, setRestore2] = useState([]);
  const [leftPrevious, setleftPrevious] = useState(null);
  const [rightPrevious, setrightPrevious] = useState(null);
  const [show,setShow] = useState(false)
//  let store=[]
// console.log(selectList)
 

  //for adding different fields
  const addFields = () => {
    left.length > 0
      ? setSelectList((prev) => [
          ...prev,
          { id: uuidv4(), leftSelect: "Choose", rightSelect: "Choose" },
        ])
      : alert("There is no option left");
  };


  //for deleting the fields
  const handleDelete = (e) => {
    let temp = selectList.filter((el) => {
      return el.id !== e.target.value;
    });

    const getOption = restore1.find((item) => item.id === e.target.value);

    const getOptionRight = restore2.find((item) => item.id === e.target.value);
    setLeft([...left, getOption?.option]);
    setRight([...right, getOptionRight?.option]);
    setSelectList(temp);
  };





  //for maintaining the option in right select box
  const handleRightChange = (option, id) => {
    setrightPrevious(
      selectList.find((item) => item.id === id && item.rightSelect != "Choose")
    );
    let rightSide = selectList.map((item) =>
      item.id === id ? { ...item, rightSelect: option } : item
    );
    setSelectList(rightSide);
    setRestore2([...restore2, { option, id }]);

    setRight(right.filter((elem) => elem !== option));
  };



//for maintaining the option in left select box
  const handleLeftChange = (option, id) => {
    setleftPrevious(
      selectList.find((item) => item.id === id && item.leftSelect !== "Choose")
    );
    let leftSide = selectList.map((item) =>
      item.id === id ? { ...item, leftSelect: option } : item
    );

    setSelectList(leftSide);
    setRestore1([...restore1, { option, id }]);

    setLeft(left.filter((element) => element !== option));
  };




  useEffect(() => {
    leftPrevious && setLeft([...left, leftPrevious.leftSelect]);
  }, [leftPrevious]);

  


  useEffect(() => {
    rightPrevious && setRight([...right, rightPrevious.rightSelect]);
  }, [rightPrevious]);




  return (
    <div className="App">
      <div className="display">
        <table className="table">
          <thead>
            <tr>
              <th className="head">SalesForce fields</th>
              <th className="head">CallHub custom fields</th>
            </tr>
          </thead>
          <tbody>
            <Select
              handleLeftChange={handleLeftChange}
              handleRightChange={handleRightChange}
              right={right}
              left={left}
              handleDelete={handleDelete}
              selectList={selectList}
            />
          </tbody>
        </table>
            <div className="btnDIb">
        <button className="btnn" onClick={addFields}><span><AddIcon/></span>map new Field</button>
        <button className="btnn1" onClick={()=> setShow(!show)}>Submit</button>
        </div>
      </div>
      
     {
       show ? selectList.map((e) =>{
         return <div className="dataShow" key={e.id}>{JSON.stringify(e)}</div>
       }):""
     }
    </div>
  );
}

export default App;
