import * as React from "react";
import Button from "./Button";
import DeleteItem from "./DeleteItem";

interface Props {
    title: string,
    body: string,
    onDelete: () => void,
    copyToClipboard: (text: string) => void
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
                <DeleteItem onDelete={props.onDelete}></DeleteItem>
            </div>
        </div>
    )
}

export default Card;