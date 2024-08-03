const areaStyle ={
    padding:'17px',
    display:'flex',
    gap:'10px'
}
const areaA = {
    // color:'rgb(96, 195, 173)',
    textDecoration:'none'
}

const Area = () =>{
    return (
        <div style={areaStyle}>
                <a href='#' style={areaA}>Stanza Living</a> / <p>PG in Gurgaon</p>
        </div>
    )
}
export default Area