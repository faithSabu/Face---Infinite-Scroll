import { useEffect, useState } from 'react'
import axios from 'axios'

function useUserSearch(pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [users, setUsers] = useState([])
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios.get(`https://randomuser.me/api/?results=${pageNumber * 8}`)
            .then(resp => {
                setUsers(prevUsers => {
                    return [...prevUsers, ...resp.data.results]
                })
                setLoading(false)
                setHasMore(resp.data.results.length > 0)
            }).catch(err => {
                console.log(err);
                setError(true)
            })
    }, [pageNumber])


    return { loading, error, users, hasMore }
}

export default useUserSearch