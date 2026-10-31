

function Heading(props) {
console.log(props.style)


    return(
        <h1 className={props.style}>{props.text}</h1>
    )
}
export default Heading







