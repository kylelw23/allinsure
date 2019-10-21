import React, { Component } from 'react'

const ClaimContext = React.createContext();
class ClaimProvider extends Component {
    state = {
        sortedClaims:[],
        featuredClaims:[],
        loading:false,
        type:'All',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };
    // getData{}
    getData = async () =>{
        try {
            // let response = await Client.getEntries({
            //     content_type: "beachResortRoomExample"
            // });
        
            let claims = this.formatData(claims);
            let featuredClaims = claims.filter(room => room.featured === true);
            let maxPrice = Math.max(...claims.map(item => item.price));
            let maxSize = Math.max(...claims.map(item => item.size));
            this.setState({
                claims,featuredClaims,sortedClaims:claims, loading:false, price:maxPrice,
                maxPrice, maxSize
            });
        }catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getData();
    }
    getRoom = (slug) => {
        let tempClaims = [...this.state.claims];
        const claim = tempClaims.find(room => room.slug === slug);
        return claim;
    }
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked:target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        }, this.filterClaims)
    }
    // Filter the list of rooms
    filterClaims = () => {
        let {
            claims, type, capacity, price, minSize, maxSize, breakfast,
            pets
        } = this.state;
        // al the rooms
        let tempClaims = [...claims];
        // transform value from string to int
        capacity = parseInt(capacity);

        price = parseInt(price);
        // filter by type      
        if(type !== 'all'){
         tempClaims = tempClaims.filter( room => room.type === type);
        };
        // filter by capacity
        if(capacity !== 1){
        tempClaims = tempClaims.filter(room => room.capacity >= capacity)
        };
        // filter by price range
        tempClaims = tempClaims.filter( room => room.price <= price);

        tempClaims = tempClaims.filter( room => room.size >= minSize
            && room.size <= maxSize);
        //filter by breakfast and pets    
        if(breakfast){
            tempClaims=tempClaims.filter(room => room.breakfast === true);
        };
        if(pets){
            tempClaims=tempClaims.filter(room => room.pets === true);
        };

        this.setState({
            sortedClaims:tempClaims
        });
    }
    render() {
        return (
            <ClaimContext.Provider value={{...this.state, getClaim:this.getClaim,
            handleChange: this.handleChange}}>
                {this.props.children}   
            </ClaimContext.Provider>
        );
    }
}

const ClaimConsumer = ClaimContext.Consumer;

export function withClaimConsumer(Component){
    return function ConsumerWrapper(props){
        return <ClaimConsumer>
            {value => <Component {...props} context={value}/>}
        </ClaimConsumer>
    }
}

export {ClaimProvider, ClaimConsumer, ClaimContext};
