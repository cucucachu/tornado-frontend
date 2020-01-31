import React, {Component} from 'react';

class NewPersonForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : {
                person : {
                    firstName : '',
                    lastName : ''
                },
                contact : {
                    email : '',
                    primaryPhone : ''
                },
                addresses : [
                    {
                        streetNumber : '',
                        streetName : '',
                        unit : '',
                        city : '',
                        state : '',
                        zip : '',
                        country : 'USA',
                        addressType : {
                            type : ''
                        }
                    }
                ]
            } 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async postData() {
        const url = "http://localhost:8000/newPerson";
        const response = await fetch(url, {
            method : 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers : {
                'Content-Type' : 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body : JSON.stringify(this.state.data),
        });

         console.log(JSON.stringify(this.state.data));

        return await response.json();
    }
    

    handleChange(e) {
        const temp = {}
        Object.assign(temp, this.state);
        switch(e.target.id) {
            case 'first-name' :
                temp.data.person.firstName = e.target.value;
                break;
            case 'last-name' :
                temp.data.person.lastName = e.target.value;
                break;
            case 'primary-phone' :
                temp.data.contact.primaryPhone = e.target.value;
                break;
            case 'email' :
                temp.data.contact.email = e.target.value;
                break;
            case 'address-type' :
                temp.data.addresses[0].addressType.type = e.target.value;
                break;
            case 'street-number' :
                temp.data.addresses[0].streetNumber = e.target.value;
                break;
            case 'street-name' :
                temp.data.addresses[0].streetName = e.target.value;
                break;
            case 'unit' :
                temp.data.addresses[0].unit = e.target.value;
                break;
            case 'city' :
                temp.data.addresses[0].city = e.target.value;
                break;
            case 'state' :
                temp.data.addresses[0].state = e.target.value;
                break;
            case 'zip' :
                temp.data.addresses[0].zip = e.target.value;
                break;

            default :
                console.log(e.id);
                throw new Error('Handle Change Default Hit');
        }
        
        this.setState(temp);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.postData()
            .then((response) => {
                alert('Success!');
            })
            .catch((error) => {
                throw new Error(error.message);
            });
    }

    render() {
        return (
            
            <div className="container">
                <br/>
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="first-name"
                            value={this.state.data.person.firstName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" 
                            className="form-control" 
                            id="last-name"
                            value={this.state.data.person.lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Primary Phone</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="primary-phone"
                            value={this.state.data.contact.primaryPhone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email"
                            value={this.state.data.contact.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address Type</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="address-type"
                            value={this.state.data.addresses[0].addressType.type}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label>Street Number</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="street-number"
                                value={this.state.data.addresses[0].streetNumber}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group col-md-9">
                            <label>Street Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="street-name"
                                value={this.state.data.addresses[0].streetName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group col-md-1">
                            <label>Unit</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="unit"
                                value={this.state.data.addresses[0].unit}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label>City</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="city"
                                value={this.state.data.addresses[0].city}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group col-md-1">
                            <label>State</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="state"
                                value={this.state.data.addresses[0].state}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group col-md-1">
                            <label>Zip</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="zip"
                                value={this.state.data.addresses[0].zip}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={this.handleSubmit}
                    >Add Person</button>
                </form>
            </div>
        )
    }
    
}

export{
    NewPersonForm as default
}