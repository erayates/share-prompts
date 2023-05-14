"use client";

import { useState, useEffect } from 'react'
import { useSearchParams,useParams} from 'next/navigation'

import Profile from '@components/Profile';



const UserProfile = () => {
    const {id} = useParams();
    const searchParams = useSearchParams();
    const [posts,setPosts] = useState([]);

    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${id}/posts`);
            const data = await response.json();
            setPosts(data);
            setName(searchParams.get('name'))
            setDesc(`Welcome to ${name}'s profile page.`)
            
            
        }
        
        fetchPosts()
    }, [])



    return (
        <Profile
            name={name}
            desc={desc}
            data={posts}
        />
    )
}

export default UserProfile