import React from 'react';

function Alert({children, type, message}) {

    const renderAlert = function () {
        return React.cloneElement(children);
    };

    const [isShow, setIsShow] = useState(true);

    const handleClose = (e) => {
        e.preventDefault();
        setIsShow(false);
    };

    return (
        <div className={css(style.alert, style[type], !isShow && style.hide)}>
            <span className={style.closebtn} onClick={handleClose}>
                &times;
            </span>
            {children ? renderAlert() : message}
        </div>
    );
}

export default Alert;