'use client'
import React, { useState } from 'react';
import axios from 'axios';

const Button = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handlePost = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/books/', {
                title: title,
                author: author
            });
            console.log('Book added:', response.data);
            setTitle('');
            setAuthor('');
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button onClick={handlePost}>Post</button>
        </>
    );
};

export default Button;
