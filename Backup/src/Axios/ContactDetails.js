import React, { Component } from 'react'

export class ContactDetails extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5">
                    
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header ">
                                    {/* <img src={this.props.details.picture.large} /> */}
                                </div>
                                <div className="card-body">
                                    <ul class="list-group">
                                        <li class="list-group-item">{this.props.details.id}</li>
                                        <li class="list-group-item">{this.props.details.name}</li>
                                        <li class="list-group-item">{this.props.details.address.city}</li>
                                        <li class="list-group-item">{this.props.details.email}</li>
                                        {/* <li class="list-group-item">{this.props.details.dob.age}</li> */}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDetails