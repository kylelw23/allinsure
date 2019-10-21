import React, { Component } from 'react'
const AdminContext = React.createContext();
class AdminProvider extends Component {
    state = {
        userId:'',
        password:'',
        name:''
    };
    getData = async () =>{
        try {
            // let response = await Client.getEntries({
            //     content_type: "insuranceAdminAccount"
        //     // });
        // let adminAccounts = response.items;
        this.setState({
            // adminAccounts: adminAccounts
        })
        }catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getData();
    }
    render() {
        return (
           <AdminContext.Provider value={{...this.state}}>
                {this.props.children}   
            </AdminContext.Provider>
        )
    }
}
const AdminConsumer = AdminContext.Consumer;

export function withAdminConsumer(Component){
    // When you run the roomFilter in RoomContainer, you pass the props,
    // this props is that props
    return function ConsumerWrapper(props){
        return <AdminConsumer>
            {value => <Component {...props} context={value}/>}
        </AdminConsumer>
    }
}


export {AdminProvider, AdminConsumer, AdminContext};
