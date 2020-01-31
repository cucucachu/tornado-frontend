import React, {Component} from 'react';

const personRoute = 'http://localhost:8000/Persons';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textField : "",
            results : [],
            instanceSelected : null
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        const temp = {}
        Object.assign(temp, this.state);
        temp.textField = e.target.value;
        this.getPeople(temp.textField)
            .then((resultsArray) => {
                temp.results = resultsArray;
                this.setState(temp);
                console.log(temp.results);
            });
        
       
    }

    async getPeople(filter) {
        
        const response = await fetch(personRoute, {
            method : 'POST',
            mode : 'cors',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                textField : filter
            }) 
        });
        
        return response.json();
    }

    render() {
        return (
            <div className='container'>
                <div className="input-group">
                <label>Search Addresses</label>
                <input
                            type='text'
                            className='form-control'
                            id='search-box'
                            value={this.state.textField}
                            onChange={this.handleChange}
                        />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                        <div className="dropdown-menu">
                            {
                                this.state.results.map((result) =>{
                                    return (
                                        <a className="dropdown-item" href="#root" key={result._id}>{result._id}</a>
                                    )
                                })
                            }
                       
                        <div role="separator" className="dropdown-divider"></div>
                        
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export{
    SearchBox as default
}