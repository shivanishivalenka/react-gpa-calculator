import './App.css'
const Calculator = (props) => {
    const {rows, handelCgpa,setGrades,setCredits,credits,grades,} = props;
  
    return (
      <div>
        <table  className = "table-component">
          <tbody>
            <tr>
              <th>S.No</th>
              <th>Credits</th>
              <th>Grades</th>
            </tr>
            {/* using map to get multiple input fields for all subjects!*/}
            {[...Array(rows)].map((value, index) => (
              <tr key={index}>
                <th>{index + 1}</th> {/*S.no*/}
                <th>
                  <input
                    type="number"
                    name={index}
                    className = "input-fields"
                    min="0"
                    onChange={(e) => {
                      const newObj = {};
                      newObj[index] = e.target.value;
                      setCredits({ ...credits, ...newObj });
                      //console.log(credits);
                    }}
                  ></input>
                </th>
                {/*credits*/}
                <th>
                  {/*grades*/}
                  <select
                    onChange={(e) => {
                      const newGr = {};
                      newGr[index] = e.target.value;
                      setGrades({ ...grades, ...newGr });
                    }}
                  >
                    <option value="" disabled selected>Select your option</option>
                    <option value="10">O</option>
                    <option value="9">A+</option>
                    <option value="8">A</option>
                    <option value="7">B+</option>
                    <option value="6">B</option>
                    <option value="5">C</option>
                    <option value="0">F</option>
                  </select>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
  
        <button onClick={handelCgpa}>Calculate</button>
      </div>

    );
  };
  
export default Calculator;
  