function PetHeader(){
    return(
        
        <div className="navbar">
            <div className="div-logo">
                    <img className="LogoClass" src="logo.png" alt="Logo pic"></img>
            </div>
            <div className="MainContainer">
                <div className="header-cred">
                    < a className="header-nav-a" href="./app.js">Login</a>
                    < a className="header-nav-a" href="./app.js">Sign Up</a>
                </div>   
                <div className="container">
                    <div className="navbar-item">< a className="nav-a" href="./app.js">Pets</a></div>
                    <div className="navbar-item"><a className="nav-a" href="./app.js">Pet Toys</a></div>
                    <div className="navbar-item"><a className="nav-a" href="./app.js">Pet Food</a></div>
                    <div className="navbar-item"><a className="nav-a" href="./app.js">Pet Accessories</a></div>
                    <div className="navbar-item"><a className="nav-a" href="./app.js">Veteran</a></div>
                </div>
            </div>
            
            
        </div>
    );
}
export default PetHeader; 