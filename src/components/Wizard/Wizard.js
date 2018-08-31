import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getName, getAddress, getCity, getState, getZip } from '../../redux/reducer';
import { connect } from 'react-redux';
import axios from 'axios';

class Wizard extends Component {
    render() { 
        let { getName, getAddress, getCity, getState, getZip, home_name, address, city, home_state, zipcode } = this.props;
        let { id } = this.props.match.params;
        return ( 
            <div>
                {id ?
                <div>
                    <div>
                    <h1>Edit Listing</h1>
                    <Link to='/'>Cancel</Link>
                </div>
                    <form>
                    <label>Property Name</label>
                    <input type="text" onChange={(event) => getName(event.target.value)} value={home_name} />
                    <label>Address</label>
                    <input type="text" onChange={(event) => getAddress(event.target.value)} value={address} />
                    <label>City</label>
                    <input type="text" onChange={(event) => getCity(event.target.value)} value={city} />
                    <label>State</label>
                    <input type="text" onChange={(event) => getState(event.target.value)} value={home_state} />
                    <label>Zip</label>
                    <input type="number" onChange={(event) => getZip(event.target.value)} value={zipcode} />
                    <Link to='/wizard/step-2'>Next</Link>
                </form>
                </div>
                : 
                <div>
                 <div>
                    <h1>Add New Listing</h1>
                    <Link to='/'>Cancel</Link>
                </div>
                <form>
                    <label>Property Name</label>
                    <input type="text" onChange={(event) => getName(event.target.value)} value={home_name} />
                    <label>Address</label>
                    <input type="text" onChange={(event) => getAddress(event.target.value)} value={address} />
                    <label>City</label>
                    <input type="text" onChange={(event) => getCity(event.target.value)} value={city} />
                    <label>State</label>
                    <input type="text" onChange={(event) => getState(event.target.value)} value={home_state} />
                    <label>Zip</label>
                    <input type="number" onChange={(event) => getZip(event.target.value)} value={zipcode} />
                    <Link to='/wizard/step-2'>Next</Link>
                </form>
                </div>
                }
            </div>
         );
    }
}

const mapStateToProps = state => {
    let { home_name, address, city, home_state, zipcode } = state;
    return {
        home_name,
        address,
        city,
        home_state,
        zipcode
    }
}
 
export default connect(mapStateToProps, { getName, getAddress, getCity, getState, getZip })(withRouter(Wizard));