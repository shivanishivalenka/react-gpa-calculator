const Cgpa = (props) =>{
    const {cgpa,error,cgpaLabel} = props;
    return (
        <div>
            <p className = "text">{cgpaLabel} <span className = "cgpa">{cgpa}</span></p>
            <p className = "error">{error}</p>
        </div>

    )
}

export default Cgpa;