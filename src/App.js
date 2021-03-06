import './App.css';
import Calculator from './Calculator';
import { useState } from 'react'
import SubjectNumber from './SubjectNumber';
import Cgpa from './Cgpa'

function App() {
  const [inputFields,setInputFields] = useState();
  const [rows, setRows] = useState();
  const [cgpa,setCgpa] = useState();
  const [credits,setCredits] = useState({});
  const [grades,setGrades] = useState({});
  const [error,setError] = useState('');
  const [cgpaLabel,setCgpaLabel] = useState('');
  console.log(credits,grades)
  /*****************************Setting number of Input fields************************************** */
  const handelInputFields = (e) =>{
    setRows(Number(inputFields));
    //console.log([...Array(rows).keys()])
    //console.log([...Array(rows)])
    //console.log(inputFields);
    //console.log(rows);
  }
  /*******************************Calculating CGPA***************************************** */
  const handelCgpa = (e) =>{
    const cred = Object.values(credits);
    const grad = Object.values(grades);
    //console.log(cred)
    //console.log(grad)
try{
    if(cred.length === grad.length && cred.length !== 0){
      setError('')
      let nr = 0
      let dr = 0
      for (let i = 0 ; i < cred.length; i++){
        
          nr+= credits[i]*grades[i];
          dr += Number(credits[i]);
        
        
        
      }
      let val = nr/dr;
      if (!isNaN(val)){
      setCgpaLabel('Your CGPA is')
      setCgpa(val);
      }
      else{
        throw error
      }
    }

    else{
      setCgpaLabel('')
      setCgpa("")
      setError('Uh-oh! Please make sure you entered all the data.')
    }
}
catch{
  setCgpaLabel('')
  setError('Uh-oh! Please make sure you entered all the data.')
  }
    
    //console.log(nr,dr)
    //console.log(cgpa)
}

  return (
    <div className = 'container'>
      <h1>GPA CALCULATOR</h1>
      <SubjectNumber 
      setInputFields = {setInputFields}
      handelInputFields = {handelInputFields}
      />
      {(rows >= 1)?(
        <>
      <Calculator 
      rows = {rows}
      handelCgpa = {handelCgpa}
      setCredits = {setCredits}
      setGrades = {setGrades}
      credits = {credits}
      grades = {grades}
      cgpa = {cgpa}
      error = {error}/>
      <Cgpa 
      cgpa = {cgpa}
      error = {error}
      cgpaLabel = {cgpaLabel}/>
      </>
      ):(
        <p></p>
      )

      }
      
    </div>
  );
}

export default App;
