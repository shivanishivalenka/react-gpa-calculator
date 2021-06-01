const SubjectNumber = (props) =>{
    const {setInputFields,handelInputFields} = props;
    return (
    <div className = "subj">
        <label>Number of Subjects:</label>
        <input type="number"
        className = "input-fields"
        min = "1" 
        onChange = {(e) => setInputFields(e.target.value)}></input>
        <button onClick = {handelInputFields}>Done</button>
    </div>
    )

}
 

export default SubjectNumber;