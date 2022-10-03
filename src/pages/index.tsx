import React, { useEffect, useState } from "react"
import type { HeadFC } from "gatsby"
import AddItem from "../components/AddItem";
import Card from '../components/Card'
import { CopypasteService } from '../services/copypasteService'
import '../styles/globals.css'

interface CopyPaste {
  id: string,
  title: string,
  body: string,
  tags: string[]
}

const IndexPage = () => {
  const [copypastes, setCopyPastes] = useState<CopyPaste[]>([]);

  useEffect(() => {
    CopypasteService.getAllSortDesc().then(data => setCopyPastes(data))
  }, [])

  async function deleteItem(index: number, id: string) {
    const status = await CopypasteService.delete(id);
    if(status == 200) {
      copypastes.splice(index, 1)
      setCopyPastes([...copypastes])
    }
  }

  async function addItem(title: string, body: string) {
    const data = await CopypasteService.create(title, body);
    if(data) {
      copypastes.unshift(data)
      setCopyPastes([...copypastes])
    }
  }

  return (
    <main className="main">
      <h1 className="title">
        CopyPastes
      </h1>
      <AddItem onClose={addItem}></AddItem>
      <div>
        {
          copypastes?.length > 0 && copypastes.map((cp: CopyPaste, index: number) => (
            <Card key={index} title={cp.title} body={cp.body} onClick={() => deleteItem(index, cp.id)} />
          ))
        }
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>