import "../label/label.css";

function Label({ children, ...props }) {
    return (
        <label {...props}>{children}</label>
    );
};

export default Label;