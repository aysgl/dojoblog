import { useEffect, useState } from 'react'

const useGet = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsPending(false)
            }).catch(err => console.log(err))
    }, [url])

    return { data, isPending, setData }
}

export default useGet