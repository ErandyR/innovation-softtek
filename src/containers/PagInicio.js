import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class PagInicio extends Component {
  render(){
    return(
      <div>
        <Link to='/home/ideas'><h1 className='black-text'>Welcome</h1></Link>
      </div>
    )
  }
}
