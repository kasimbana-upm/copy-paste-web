import * as React from "react";

const styles = {
    container: {
        backgroundColor: "#ad2f2f",
        padding: "5px 10px",
        width: "fit-content",
        borderRadius: "10px",
        cursor: "pointer",
        userSelect: "none"
    }
}

const Button = ({children, onClick}: any) => {
    return (
        <div style={styles.container} onClick={onClick}>
            {children}
        </div>
    )
}

export default Button;