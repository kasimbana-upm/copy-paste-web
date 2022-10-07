import * as React from "react";
import DeleteItem from "./DeleteItem";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from "@mui/material";

interface Props {
    title: string,
    body: string,
    onDelete: () => void,
    onCopy: () => void
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
                <IconButton onClick={() => props.onCopy()}>
                    <ContentCopyIcon/>
                </IconButton>
                <DeleteItem onDelete={props.onDelete}></DeleteItem>
            </div>
        </div>
    )
}

export default Card;