import React, { Component } from 'react';

export class Customer {
    constructor() {
        this.customerId = 0;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phone = "";
        this.address = "";
    }
}

export class AddCustomer extends Component {
    constructor(props) {
        super(props)

        this.state = { title: "", customer: new Customer, loading: true };
        this.initialize();

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async initialize() {
        var customerId = this.props.match.params["customerId"];
        if (customerId > 0) {
            const response = await fetch('api/customersapi/' + customerId);
            const data = await response.json();
            this.setState({ title: 'Edit', customer: data, loading: false });
        }
        else {

            this.state = { title: "Create", customer: new Customer, loading: false };            
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();
        return (
            <div><h1>{this.state.title}</h1>
                <h3>Customer</h3>
                <hr />
                {contents}
            </div>
        );
    }

    async handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        if (this.state.customer.customerId) {
            var response1 = fetch('api/customersapi/' + this.state.customer.customerId, { method:'PUT', body: data });
            this.props.history.push('/fetch-customers');
        }
        else {
            var response2 = fetch('api/customersapi', { method:'POST', body: data });
            this.props.history.push('/fetch-customers');
        }
        
    }

    handleCancel(event) {
        event.preventDefault();

        this.props.history.push('/fetch-customers');

    }
    renderCreateForm() {
        return (
            <form onSubmit={this.handleSave}>
                <div className="form-group row">
                    <input type="hidden" name="customerId" value={this.state.customer.customerId} />
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="firstName">First Name</label>
                    <div className="col=md-4">
                        <input className="form-control" type="text" name="firstName" defaultValue={this.state.customer.firstName} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="lastName">Last Name</label>
                    <div className="col=md-4">
                        <input className="form-control" type="text" name="lastName" defaultValue={this.state.customer.lastName} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="email">Email</label>
                    <div className="col=md-4">
                        <input className="form-control" type="text" name="email" defaultValue={this.state.customer.email} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="phone">Phone</label>
                    <div className="col=md-4">
                        <input className="form-control" type="text" name="phone" defaultValue={this.state.customer.phone} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="address">Address</label>
                    <div className="col=md-4">
                        <input className="form-control" type="text" name="address" defaultValue={this.state.customer.address} required />
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Save</button>
                    <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                </div>
            </form>
            );
    }
}