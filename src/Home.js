import React from 'react'
import { useHistory } from "react-router-dom"

function Home() {
    const history = useHistory()
    const redirect_to_roles = () => {
        history.push('/roles')
    }
    const redirect_to_addmed = () => {
        history.push('/addmed')
    }
    const redirect_to_supply = () => {
        history.push('/supply')
    }
    const redirect_to_track = () => {
        history.push('/track')
    }
    return (
        <div>
            <h3>Food Supply Chain Flow :- </h3>
            <br />
            <h5>Owner Should Register Framers ,Processors, Distributors and Retailers</h5>
            <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm">Register</button>
            <br />
            <h5>Order products</h5>
            <button onClick={redirect_to_addmed} className="btn btn-outline-primary btn-sm">Order Products</button>
            <br />
            <h5>Manage Supply Chain</h5>
            <button onClick={redirect_to_supply} className="btn btn-outline-primary btn-sm">Manage Supply Chain</button>
            <br />
            <hr />
            <br />
            <h5><b>Track a Product</b> </h5>
            <button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm">Track Products</button>
        </div>
    )
}

export default Home
