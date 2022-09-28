import * as React from "react"
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
  const [copypastes, setCopyPastes] = React.useState(rr);

  function addItem(title: string, body: string) {
    console.log("add item");
    
  }

  return (
    <main className="main">
      <h1 className="title">
        CopyPastes
      </h1>
      <AddItem onClose={addItem}></AddItem>
      <div>
        {
          copypastes.length > 0 && copypastes.map((cp: CopyPaste, index: number) => (
            <Card key={index} title={cp.title} body={cp.body} onClick={() => deleteItem(index, cp.id)} />
          ))
        }
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
