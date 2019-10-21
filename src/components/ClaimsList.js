import React from 'react'
import Claim from './Claim'
// import { isTemplateElement } from '@babel/types'
export default function ClaimList({claims}) {
    if(claims.length ===0){
        return <div className="empty-search"> 
        <h3 style={{color:'black'}}>Unfortunately no rooms matched your search parameters</h3>
        </div>
    }
    return (
       <section className="roomslist">
           <div className="roomslist-center">
               {claims.map(item => {
                   return <Claim key={item.id} room={item}/>;
               })}
           </div>
       </section>
    )
}
