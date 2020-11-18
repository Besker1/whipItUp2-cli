import React from 'react'
export default function Recipes (props){
    const content = props.content.map(cont => <li>{cont}</li>)
    return (
<div className='container'>
    <div className='recipe'>
    <h1>{props.title}</h1>
    <ul>{content}</ul>
    </div>
 </div>

    )
}