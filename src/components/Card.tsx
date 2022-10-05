import * as React from "react";
import Button from "./Button";

interface Props {
    title: string,
    body: string,
    onClick: () => {},
    copyToClipboard: (text: string) => {}
}

const styles = {
    container: {
        backgroundColor: "#596C68",
        color: "#E3D9CA",
        padding: "10px 20px",
        marginBottom: "20px",
        borderRadius: "20px",
        buttonContainer: {
            display: "flex",
            justifyContent: "flex-end"
        }
    }
}

const Card = (props: Props) => {
    return (
        <div style={styles.container}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div style={styles.container.buttonContainer}>
                <Button onClick={props.copyToClipboard}>
                    Copiar
                </Button>
                <Button onClick={props.onClick}>
                    Eliminar
                </Button>
            </div>
        </div>
    )
}

export default Card;