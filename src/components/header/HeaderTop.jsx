const HeaderTop = ({setToggle , toggle}) => {
    return (   <div className="header-top">
            <div onClick={() => setToggle(prev => !prev)} className="header-top-menu">
                {toggle ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
            </div>
            <div className="header-top-phone">
                <i className="bi bi-telephone"></i>

                +20 10 123-45-678</div>
            <div className="header-top-text">Welcome to our bookstore!</div>
            <div className="header-top-link">
                <i className="bi bi-person-fill">
                </i>
                    Login
            </div>

        </div> );
}
 
export default HeaderTop;