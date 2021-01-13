import React from 'react'
import './styles.css'

const Card = () => {
   
    return (
        <div class="card">
            <div class="card-header">
                <div class="title">
                    <h2></h2>
                    <span>Group: Support</span>
                </div>
                <a href="">View details</a>
            </div>
            <ul class="card-items">
                <li class="card-item">Waiting on Feature Request<span class="card-item-number">4238</span></li>
                <li class="card-item">Awaiting Customer Response<span class="card-item-number">1005</span></li>
                <li class="card-item">Awaiting Developer Fix<span class="card-item-number">914</span></li>
                <li class="card-item last">Pending<span class="card-item-number">914</span></li>

            </ul>
        </div>
    )
}

export default Card
