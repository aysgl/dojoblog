import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAdd = () => {
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const createBlog = async (blog) => {
        try {
            setIsPending(true);
            await fetch(`http://localhost:8000/blogs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog),
            });
            setIsPending(false);
            history('/');
        } catch (error) {
            console.error(error);
            setIsPending(false);
        }
    };

    return { isPending, createBlog };
};

export default useAdd;
