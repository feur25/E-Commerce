const ConditionalWrapper = ({ children, condition }) => {
    return condition ? (
        <div>{children}</div>
    ) : (
        children
    )
}
