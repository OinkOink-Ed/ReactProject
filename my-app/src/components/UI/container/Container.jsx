import "../container/container.css";

function Container({ children, ...props }) {
    return (
        <div {...props}>{children}</div>
    );
};

export default Container;