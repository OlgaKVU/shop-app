import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
                {
                    key:'all',
                    name: 'All'
                },
                {
                    key:'womens clothing',
                    name: 'Womens clothing'
                
                },
                {
                    key:'mens clothing',
                    name: 'Mens clothing'
                },
                {
                    key:'electronics',
                    name: 'Electronics'
                },
                {
                    key:'jewelery',
                    name: 'Jewelery'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el =>(
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories