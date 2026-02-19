import "./footer.css"
const Footer = () => {
    return (<footer className="footer">
        <div className="footer-social-media">
            <div className="footer-social-media-text">Follow Us on Social Media</div>
            <div className="footer-social-media-icons">
                <div className="footer-social-media-icon">
                    <i style={{ color: "blue" }} className="bi bi-facebook"></i>
                </div>
                <div className="footer-social-media-icon">
                    <i style={{ color: "blue" }} className="bi bi-twitter"></i>
                </div>
                <div className="footer-social-media-icon">
                    <i style={{ color: "red" }} className="bi bi-instagram"></i>
                </div>
                <div className="footer-social-media-icon">
                    <i style={{ color: "red" }} className="bi bi-youtube"></i>
                </div>
            </div>
        </div>
        <div className="footer-links-wrapper">
            <div className="footer-links-item">
                <h3 className="footer-links-item-title">Quick Links</h3>
                <ul className="footer-links">
                    <li className="footer-link">Home</li>
                    <li className="footer-link">Authors</li>
                    <li className="footer-link">About Us</li>
                    <li className="footer-link">Contact Us</li>
                    <li className="footer-link">Register</li>
                </ul>
            </div>
            <div className="footer-links-item">
                <h3 className="footer-links-item-title">Contact Information</h3>
                <div className="footer-address-wrapper">
                    <div className="footer-address-item">
                        <i className="bi bi-geo-alt-fill"></i>
                        <span>123 Main Street, Anytown, USA</span>

                    </div>
                    <div className="footer-address-item">
                        <i className="bi bi-telephone-fill"></i>
                        <span>123 456 789</span>

                    </div>
                    <div className="footer-address-item">
                        <i className="bi bi-envelope-fill"></i>
                        <span>info@bookstore.com</span>

                    </div>
                </div>
            </div>
            <div className="footer-links-item">
                <h3 className="footer-links-item-title">About Us</h3>
                <p className="footer-description">Welcome to our bookstore! We are dedicated to providing the best reading experience for all book lovers.</p>

            </div>
        </div>

    </footer>);
}

export default Footer;