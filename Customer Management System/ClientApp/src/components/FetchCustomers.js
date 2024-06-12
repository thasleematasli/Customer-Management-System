import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class FetchCustomers extends Component {
    static displayName = "Customers";

    constructor(props) {
        super(props);
        this.state = { customers: [], loading: true };

    }

    componentDidMount() {
        
    this.PopulateCustomersData();
    }
    async PopulateCustomersData() {
        const response = await fetch('api/customersapi');
        const data = await response.json();

        this.setState({ customers: data, loading: false });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCustomersTable(this.state.customers);
        return (
            <div>
                <h1 id="tableLable">Customers</h1>
                <p>This component fetches customers from the server.</p>
                <p>
                    <Link to="/add-customer">Create New Customer</Link>
                </p>
                {contents}
            </div>
        );
    }

    renderCustomersTable(customers) {
        return (
            <table className='table table-striped' aria-labelledby='tableLable'>
            <thead>
                    <th></th>
                    <th>Customer Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>phone</th>
                    <th>Address</th>
                    <th></th>
                </thead>
                <tbody>
                    {customers.map(customer =>
                        <tr key={customer.customerId }>
                            <td></td>
                            <td>{customer.customerId }</td>
                            <td>{customer.firstName }</td>
                            <td>{customer.lastName }</td>
                            <td>{customer.email }</td>
                            <td>{customer.phone }</td>
                            <td>{customer.address }</td>
                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(customer.customerId) }>Edit</button>&nbsp;
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(customer.customerId) }>Delete</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
            </table>
            );
    }
    handleEdit(id) {
        this.props.history.push("/customers/edit/" + id);

    }
    handleDelete(id) {
        if (!window.confirm("Do you want to delete the customers:" + id)) {
            return;
        }
        else {
            fetch('api/customersapi/' + id, { method: 'delete' })
                .then(data => {
                    this.setState({
                        customers: this.state.customers.filter((rec) => {
                            return (rec.customerId != id);
                        })
                    });
                });
        }
    }
}