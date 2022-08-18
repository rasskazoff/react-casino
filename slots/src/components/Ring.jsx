import React from 'react'

const Ring = (props)=>{

    let styles = props.order>=0 ? 'ringEnd' : 'ringMoving'
    
    let items_order = props.order>0 ? sortArr(props.items, props.order) : sortArr(props.items, 0)

    return(
        items_order.map((items_order)=><div key={items_order.img} className={styles}><img src={items_order.img} alt=""></img></div>)
    )
}

function sortArr(items,a){
    let arr=[]
    for(let i = a; i<items.length; i++){
        arr.push(items[i])
    }
    
    for(let i = 0; i<a; i++){
        arr.push(items[i])   
    }
    
    return arr
}
export default Ring