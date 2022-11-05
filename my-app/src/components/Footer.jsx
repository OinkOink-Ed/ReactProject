function Footer(props) {
    return (
        <div className="footer my-bar">
            <div className="my-bar-text">{props.children}</div>
        </div>
    );
};

export default Footer;