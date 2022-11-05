function Header(props) {
    return (
        <div className="my-bar">
            <div className="my-bar-text">{props.children}</div>
        </div>
    )
};

export default Header;