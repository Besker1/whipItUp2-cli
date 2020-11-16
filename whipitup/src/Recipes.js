export default function Recipes (props){
    return (
<div>
    <h1>{props.title}</h1>
    <img src ={props.image} alt = {props.title}/>
    <p>{props.content}</p>
 </div>

    )
}