"use client";

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {

  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => {
        return (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        )
      })}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);



  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    handleSearchResults();
  }

  const handleSearchResults = () => {
    const results = posts.filter((post) =>
      post.tag.includes(searchText) || post.prompt.includes(searchText) || post.creator.username.includes(searchText)
    );

    setSearchResults(results);
  }


  const handleTagClick = (tag) => {
    setSearchText(tag);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();


      setPosts(data);
    }

    fetchPosts();

  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      {
        searchText ? (
          <PromptCardList
            data={searchResults}
            handleTagClick={handleTagClick}
          />) : (
          <PromptCardList
            data={posts}
            handleTagClick={handleTagClick}
          />
        )
      }

    </section>
  )
}

export default Feed