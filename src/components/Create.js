import React, { useState } from 'react'
import useAdd from '../helpers/useAdd'

const Create = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("Mario")
    const [body, setBody] = useState("")
    const { isPending, createBlog } = useAdd();

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author };
        createBlog(blog);
    }

    return (
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input defaultValue={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder='Title' required />
                    <select value={author} onChange={(e) => setAuthor(e.target.value)} required>
                        <option value="Mario">Mario</option>
                        <option value="Yoshi">Yoshi</option>
                    </select>
                </div>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder='Description' rows="10" required />

                {!isPending && <button >Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    )
}

export default Create