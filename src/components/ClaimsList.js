import React, {useState, useEffect} from 'react';
import Claim from './Claim';
import firebase from 'firebase/app';
function useTimes(){
    const [times, setTimes] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('claim')
            .onSnapshot(
                (snapshot) => {
                    const newTimes = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setTimes(newTimes)
                })
            return () => unsubscribe();
    }, [])
    return times
}
export default function ClaimList() {
    const claims = useTimes();
    if(claims.length == 0){
        return <div className="empty-search"> 
        <h3 style={{color:'black'}}>Unfortunately no rooms matched your search parameters</h3>
        </div>
    }
    return (
       <section className="roomslist">
           <div className="roomslist-center">
               {claims.map(item => {
                   if(item.rejected == true || item.accepted == true){
                   return null
                   }
                   else{return <Claim key={item.id} room={item}/>;}
               })}
           </div>
       </section>
    )
}
