import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    onChange = (e) => {
        const value = e.target.value
        this.setState({ search: value })
        this.props.onUpdateSearch(value)
    }
    render() {
        const { search } = this.state
        return (
            <input type="text" className='search' placeholder='Search...' value={search} onChange={this.onChange} />
        )
    }
}
