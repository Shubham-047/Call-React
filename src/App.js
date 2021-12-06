import React, { useState, useEffect } from "react";
import "./App.css"
import Select from "./Components/Select";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import { AiOutlinePlus} from "react-icons/ai";


function App() {
  //list for rendering another items
  const [selectList, setSelectList] = useState([
    { id: uuidv4(), leftSelect: "Choose", rightSelect: "Choose" },
  ]);

 const array1 = useSelector(state => state.array1)
 
 const array2 = useSelector(state => state.array2)

  const [left, setLeft] = useState(array1);                //for left option
  const [right, setRight] = useState(array2);               //for right option
  const [restore1, setRestore1] = useState([]);                //empty array for storing the leftSelected array 
  const [restore2, setRestore2] = useState([]);                //empty array for storing the rightSelected array 
  const [leftPrevious, setleftPrevious] = useState(null);       //for maintaining the previous selected option on left side
  const [rightPrevious, setrightPrevious] = useState(null);       //for maintaining the previous selected option on right side
  const [show,setShow] = useState([])

//for showing data
const showJsondata = ()=>{
  setShow(selectList)
  }

 

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

    const getOption = restore1.find((item) => item.id === e.target.value);   //accessing the left side deleted element in restore1

    const getOptionRight = restore2.find((item) => item.id === e.target.value);  //accessing the right side deleted element in restore1
    setLeft([...left, getOption?.option]);                                       //pushing the deleted element in the option list again
    setRight([...right, getOptionRight?.option]);                                //pushing the deleted element in the option right again
    setSelectList(temp);
  };





  //for maintaining the option in right select box
  const handleRightChange = (option, id) => {
    setrightPrevious(
      selectList.find((item) => item.id === id && item.rightSelect != "Choose")       //adding the previous right element and pushing to the previous list
    );
    let rightSide = selectList.map((item) =>                                       //setting the value of right selectbox
      item.id === id ? { ...item, rightSelect: option } : item
    );
    setSelectList(rightSide);
    setRestore2([...restore2, { option, id }]);                                   //storing the selected right side option to restore2

    setRight(right.filter((elem) => elem !== option));                           //filtering out the option which is selected from the option list
  };



//for maintaining the option in left select box
  const handleLeftChange = (option, id) => {
    setleftPrevious(
      selectList.find((item) => item.id === id && item.leftSelect !== "Choose")          //adding the previous left element and pushing to the previous list
    );
    let leftSide = selectList.map((item) =>                                       //setting the value of left selectbox
      item.id === id ? { ...item, leftSelect: option } : item
    );

    setSelectList(leftSide);
    setRestore1([...restore1, { option, id }]);                                   //storing the selected left side option to restore2

    setLeft(left.filter((element) => element !== option));                           //filtering out the option which is selected from the option list
  };




  useEffect(() => {
    leftPrevious && setLeft([...left, leftPrevious.leftSelect]);       //adding the previous left selected array to the left option list again
  }, [leftPrevious]);

  


  useEffect(() => {
    rightPrevious && setRight([...right, rightPrevious.rightSelect]);       //adding the previous right selected array to the right option list again
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
        <button className="btnn" onClick={addFields}><AiOutlinePlus style={{fontSize:"16px",paddingRight:"5px"}}/>map new Field</button>
        <button className="btnn1" onClick={showJsondata}>Submit</button>
        </div>
      </div>
      <div className="showTable">
        <div className="showHead">
          <div>SalesForce Fields</div>
          <div>CallHub Field</div>
        </div>
      {/* For showing the data */}
     {
       show.map((e) =>{
         return <div className="dataShow" key={e.id}>
           <div className="showLeft">{e.leftSelect === "Choose" ? "" : e.leftSelect === "" ? "" : e.leftSelect}</div>
           <div className="showRight">{e.rightSelect === "Choose" ? "" : e.rightSelect === "" ? "" : e.rightSelect}</div>
         </div>
       })
     }
    </div>
    </div>
  );
}

export default App;
