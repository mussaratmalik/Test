function PetFooter(){
    return(
        <div className="footer-navbar">
            <div className="footer-container">
                <div className="footer-navbar-item">< a className="footer-nav-a" href="./app.js">Trending</a></div>
                <div className="footer-navbar-item"><a className="footer-nav-a" href="./app.js">About Us</a></div>
                <div className="footer-navbar-item"><a className="footer-nav-a" href="./app.js">Contact Us</a></div>
                <div className="footer-navbar-item"><a className="footer-nav-a" href="./app.js">Help</a></div>
                <div className="footer-navbar-item">
                    <span className="footer-nav-a">Follow Us</span> 
                    <div className="footer-social-div">
                        <a className="footer-nav-a" href="footer.js"><img className="footer-social-icons" src="facebook.png" alt="Facebbok"></img></a> 
                        <a className="footer-nav-a" href="footer.js"><img className="footer-social-icons"  src="instagram.png" alt="Instagram"></img></a> 
                        <a className="footer-nav-a" href="footer.js"><img className="footer-social-icons" src="youtube.png" alt="YouTube"></img></a> 
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
export default PetFooter; 