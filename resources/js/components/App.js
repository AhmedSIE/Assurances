  // resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MainNavigation from './navigations/MainNavigation'

class App extends Component {
    render () {
        return (
            <MainNavigation/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
