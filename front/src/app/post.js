"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Get = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/books/');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{book.author}</li>
                ))}
            </ul>
        </>
    );
};

export default Get;