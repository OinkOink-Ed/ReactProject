import "../container/Container.css"

function Container({ children, ...props }) {
    return (
        <div {...props}>{children}</div>
    );
};

export default Container;