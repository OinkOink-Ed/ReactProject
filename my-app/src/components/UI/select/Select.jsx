function Select({ children, lists, ...props }) {
    return (
        <select {...props}>{children}</select>
    );
};

export default Select;