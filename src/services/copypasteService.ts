///import { API_URL } from "../constants";

export interface CopyPaste {
    id: string,
    title: string,
    body: string,
    tags: string[]
}

const API_URL = "http://localhost:8080";

export class CopypasteService {
    static async  getAllSortDesc(): Promise<CopyPaste[]> {
        const res = await fetch(`${API_URL}/copypaste?sort=desc`);
        const data = await res.json();
        return data;
    }

    static async create(title: string, body: string): Promise<CopyPaste> {
        const res = await fetch(`${API_URL}/copypaste`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                title: title,
                body: body,
                tags: []
            })
        });
        let data = null;
        if(res.status == 201) {
            data = await res.json();
        }
        return data;
    }

    static async delete(id: string): Promise<number> {
        const res = await fetch(`${API_URL}/copypaste/${id}`, {
            method: "DELETE"
        });
        return res.status;
    }
}