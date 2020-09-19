import React from 'react'

import './../cssmodules/home.css';




export default class HomePage extends React.Component{

state={counter:null}

componentDidMount(){
  
  this.setState({counter:null})
}


componentDidUpdate(prevProps,prevState){
  setTimeout(()=>{if(prevState.counter===null){
    this.setState({counter:10})
  }
  else if(prevState.counter<101){
    
    this.setState({counter:prevState.counter+10})
  } },3000)
}
















  render(){
    return(<><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input  onClick={this.alt} className="form-control mr-sm-2"  id="search" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<div className='progress'>
  <div className='progress-bar'
       role='progressbar'
       aria-valuenow='70'
       aria-valuemin='0'
       aria-valuemax='100'
       style={{width: `${this.state.counter}%`}}>
    <span className='sr-only'>70% Complete</span>
  </div>
</div>
</>
)
  }
}





// https://blog.hubspot.com/marketing/landing-page-examples-list