// resources/assets/js/components/ProjectsList.js

import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Notifications extends Component {
    constructor (props) {
        super(props)
        this.state = {
            notifications: []
        }
    }

    componentDidMount () {
        axios.get('/api/auth/notifications').then(response => {
        this.setState({
            notifications: response.data
        })
        })
    }

  render () {
    const { notifications } = this.state
    return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Les Notifications</div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                                    Create new project
                                </Link>
                                <ul className='list-group list-group-flush'>
                                    {notifications.map(notifications => (
                                        <Link
                                        className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                        to={`/${notifications.id}`}
                                        key={notifications.id}
                                        >
                                        {notifications.libelle}
                                        <span className='badge badge-primary badge-pill'>
                                            {notifications.description}
                                        </span>
                                        </Link>
                                    ))}
                                </ul>

                            </div>
                        </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Notifications
