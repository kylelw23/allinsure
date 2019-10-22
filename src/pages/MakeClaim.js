import React, { Component } from 'react'
import LogoImg from "../logo/logo(transparent).png";
import {Link, Redirect} from 'react-router-dom';
import SignedInLinks from '../components/layout/SignedInLinks';
import { createClaim } from '../store/actions/claimActions';
import { connect } from 'react-redux';
import firebase from '../config/fbConfig';
class MakeClaim extends Component {
    state ={
        alcohol: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createClaim(this.state);
        this.props.history.push('/User-Login/UserHomePage/MakeClaimSuccess');
    }
    render() {
        const {auth} = this.props;
        if(!auth.uid){
            return <Redirect to='/'/>
        }
        return (
            <>
            <nav className="admin-navigation">
                <div className="logo-admin">
                    <img src={LogoImg} alt="Logo"/>
                </div>
               <SignedInLinks/>
                <div id="clear"></div>
                <div className="admin-header">
                    <h1>Claim an insurance</h1>
                </div>
                <div className="nav-space"></div>
            </nav> 
            <div className="make-claim-container">
                <div className="user-greeting">
                    <h3>Greeting Khoa!</h3>
                </div>
                <div className="clear"></div>
                <div className="container-claim-input">
                    <div className="container-claim-event">
                        <h3>What Happenned?</h3>
                    </div>
                    <label className="m-l-20 m-t-10">Please tell us what happened, including when and where the event occured</label>
                    <form 
                    onSubmit={this.handleSubmit}
                    className="claim-form m-l-40">
                             <span></span>
                            <h4 className="m-t-30 m-l-40">When/Where?</h4>
                            <div className="clear"></div>
                            <div className="claim-container-input m-t-20 m-l-60">
                                <label className="m-r-20">Date</label>
                                <input type="date"
                                id="eventDate"
                                onChange={this.handleChange}
                                ></input>
                            </div>
                            <div className="clear"></div>
                            
                            <div className="claim-container-input m-t-20 m-l-60">
                                <label className="m-r-20">Street address/location</label>
                                <textarea 
                                id="eventLocation"
                                onChange={this.handleChange}
                                className=""
                                name="message" rows="3" cols="30"></textarea>
                            </div>
                        
                        <div className="dashed-seperate m-t-100"></div>
                        <div className="container-claim-event-type m-t-20 m-l-40">
                                <span></span>
                                <h4>Event</h4>
                                <div className="clear"></div>
                                <div className="claim-container-input m-t-20 m-l-20">
                                    <label className="m-r-20">Event Type</label>
                                    <select 
                                    id="eventType"
                                    onChange={this.handleChange}>
                                        <option value="damageDriven">Damage Whilst Driven</option>
                                        <option value="stolen">Being Stolen</option>
                                        <option value="damageDriven">Damage Whilst Parking</option>
                                    </select>
                                </div>
                                <div className="clear"></div>
                                
                                <div className="claim-container-input m-t-20 m-l-20">
                                    <label className="m-r-20">Tell us what happened
                                    prior to, during and after the accident</label>
                                    <textarea
                                    id="eventDescription"
                                    onChange={this.handleChange} 
                                    className=""
                                    name="message" 
                                    rows="3" 
                                    cols="30"></textarea>
                                </div>
                            
                        </div>
                        <div className="dashed-seperate"></div>
                        <div className="container-claim-event-type m-t-20 m-l-40">
                                <span></span>
                                <h4>Damage</h4>
                                <div className="clear"></div>
                                <div className="claim-container-input m-t-20 m-l-20">
                                    <label className="m-r-20">Can your vehicle be safely driven?</label>
                                    <select 
                                    id="drivable"
                                    onChange={this.handleChange}
                                    type="text">
                                        <option value='yes'>Yes</option>
                                        <option value='yes'>No</option>
                                    </select>
                                </div>
                                
                                <div className="claim-contain
                                <option value='yes'>er-input m-t-20 m-l-20">
                                    <label className="m-r-20">What parts of your vehicle
                                    were damaged?</label>
                                    <textarea
                                    id="damagedPart"
                                    onChange={this.handleChange} 
                                    className=""
                                    name="message" 
                                    rows="3" 
                                    cols="30"></textarea>
                                </div>
                        </div>
                        <div className="dashed-seperate"></div>
                        <div className="container-claim-event-type m-t-20 m-l-40">
                                <span></span>
                                <h4>Driver</h4>
                                <div className="clear"></div>
                                <div className="claim-container-input m-t-20 m-l-20">
                                    <label className="m-r-20">Licence type</label>
                                    <select name="licence"
                                    id="licence"
                                    onChange={this.handleChange}
                                    >
                                        <option value="international">International Licence</option>
                                        <option value="australia">Australian Licence</option>
                                    </select>
                                </div>
                                
                                <div className="claim-container-input m-t-20 m-l-20">
                                    <label className="m-r-20">Years Licenced</label>
                                    <input type='number'
                                    id="licenceLength"
                                    onChange={this.handleChange}
                                    min={0}
                                    max={99}></input>
                                </div>
                                <div className="claim-container-input m-t-20 m-l-20">
                                    <label className="m-r-20" htmlFor='alcohol'>In the first 12 hours prior to the
                                        event, did the driver consume any alcohol, medication drugs?
                                    </label>
                                    <select
                                    id="alcohol"
                                    onChange={this.handleChange}
                                    >
                                        <option value='yes'>Yes</option>
                                        <option value='yes'>No</option>
                                    </select>
                                </div>
                        </div>
                        <div className="dashed-seperate"></div>
                        <div className="container-claim-event-type m-t-20 m-l-40">
                        <span></span>
                                <h4>Photos and documents</h4>
                                <h6>If you have any additional documents to send us,
                                    such as photos or receipts, please attach them
                                    to this claim now.
                                </h6>
                                <div className="clear"></div>
                                <div className="claim-container-input m-t-20 m-l-20">
                                    <button>Add File</button>
                                </div>
                        </div>
                        <div className="dashed-seperate"></div>
                        <div className="container-claim-event-type m-t-20 m-l-40">
                                <span></span>
                                <h4>Your contact details</h4>
                                <div className="clear"></div>
                                <div className="claim-container-input m-t-20 m-l-20">
                                    <label className="m-r-20">Mobile number</label>
                                    <input 
                                    id='mobileNumber'
                                    onChange={this.handleChange}
                                    type="number"></input>
                                </div>
                                <div className="claim-container-input m-t-20 m-l-20">
                                    <label className="m-r-20">Email
                                    </label>
                                    <input type="email"
                                    id='email'
                                    onChange={this.handleChange}
                                    ></input>
                                </div>
                        </div>
                        <div className="dashed-seperate"></div>
                        <div className="container-claim-event-type m-t-20 m-l-40">
                                <span></span>
                                <h4>Your ABN details (Optional)</h4>
                                <div className="clear"></div>
                                <div className="claim-container-input m-t-20 m-l-20">
                                    <label className="m-r-20">BSB</label>
                                    <input 
                                    id='bsb'
                                    onChange={this.handleChange}
                                    type="number"></input>
                                </div>
                                <div className="claim-container-input m-t-20 m-l-20">
                                    <label className="m-r-20">Account number</label>
                                    <input 
                                    id='accNum'
                                    onChange={this.handleChange}
                                    type="number"></input>
                                </div>
                        </div>
                        <div className="claim-submit-btn-container">
                            <div className="claim-submit-btn m-r-100 p-t-9">
                                <button type="submit" style={{color:"white"}}>Lodge claim ></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createClaim: (claim) => dispatch(createClaim(claim))
    }
};
// pass to claimActions
export default connect(mapStateToProps, mapDispatchToProps)(MakeClaim)