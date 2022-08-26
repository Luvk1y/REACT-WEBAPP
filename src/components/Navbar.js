import {Link} from "react-router-dom";

const NavBar = ()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <span class="navbar-brand" >NYFL</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to = "/" class="nav-link">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/Schedule" class="nav-link">Schedule</Link>
      </li>
      <li class="nav-item">
        <Link to="/Contact" class="nav-link">Contact</Link>
      </li>
      <li class="nav-item">
        <Link to="/ChatView" class="nav-link">Chat</Link>
      </li>
      <li class="nav-item">
        <Link to="/Login" class="nav-link">Sign in</Link>
      </li>
    </ul>
  </div>
</nav>
        )
}
export {NavBar}