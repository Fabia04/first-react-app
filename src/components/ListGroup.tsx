import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup(){
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
     //items = [];

     
let selectedIndex = 0;


    const handleClick = (event: MouseEvent) => console.log(event);


        return (
          <Fragment>
            <h1>List</h1>
            {items.length===0 ? <p>No item found</p> : null}
            {items.length===0 && <p>No item found</p>}
            <ul className="list-group">
              {items.map((item,index)=> (
              <li 
              className="list-group-item"
               key={item} 
              onClick={()=> console.log(item)}
              >
                {item}
                </li>
              ))}
            </ul>
             
          </Fragment>
           );
      
}

export default ListGroup;