import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useDelete = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const history = useNavigate();

    const deleteBlog = async (blogId) => {
        try {
            setIsDeleting(true);
            await fetch(`http://localhost:8000/blogs/${blogId}`, {
                method: 'DELETE',
            });
            history('/');
        } catch (error) {
            console.error(error);
        } finally {
            setIsDeleting(false);
        }
    };

    return { isDeleting, deleteBlog };
};

export default useDelete;
