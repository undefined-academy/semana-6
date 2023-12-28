import classNames from 'classnames';

const Paragraph = ({ as='p', children, size='sm', isHelpText}) => {
    
    const Component = as 

    return (
        <Component 
            className={classNames("paragraph", "font-regular", {
                [`paragraph-${size}`]: size,
                "is-help-text": isHelpText
            })}
        >
            {children}
        </Component>
    );
};

export default Paragraph;