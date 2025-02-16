import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      <Link class="navbar-brand" to="/">Calculator</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Textmethods</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Calculation">Basic Calculations</Link>
        </li>
      </ul>
      </div>
      </div>
      <div className = "d-flex">
      <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
      <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
      <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
      <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
      {/* <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
      <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>*/}
      </div> 
      <div className={`form-check form-switch text-${props.mode ==='light'? 'dark' : 'light'}`}>
      <input className="form-check-input" onClick={()=>{props.toggleMode('null')}} type="checkbox" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'? 'Enable Dark mode':'Enable Light mode'}</label> 
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
      </div> 
    </nav>
    </>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired}

Navbar.defaultProps = {title: 'Set title here'};