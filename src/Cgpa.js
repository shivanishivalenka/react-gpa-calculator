const Cgpa = (props) =>{
    const {cgpa,error} = props;
    return (
        <div>
            <p className = "text">Your CGPA is <span className = "cgpa">{cgpa}</span></p>
            <p className = "error">{error}</p>
        </div>

    )
}

export default Cgpa;