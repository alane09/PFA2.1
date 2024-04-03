import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Algo = () => {
    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/courses');
            const filteredCourses = response.data.filter(course => (
                course.niveau === "1TA" &&
                course.semestre === "1" &&
                course.matiere === "Algo"
            ));
            setCourses(filteredCourses);
        } catch (error) {
            console.error('Error getting courses:', error.message);
        }
    };

    const removeDuplicateNames = (arr) => {
        const uniqueNames = [];
        const seen = {};
        arr.forEach(course => {
            const name = course.name.toUpperCase(); // Convert name to uppercase
            if (!seen[name]) {
                seen[name] = true;
                uniqueNames.push(name);
            }
        });
        return uniqueNames.sort(); // Sort unique names alphabetically
    };

    useEffect(() => {
        getCourses();
    }, []);

    return (
        <div className='container'>
            <h1 style={{ textAlign: 'center' }}>Cours et TD</h1>
            <ul>
                {removeDuplicateNames(courses).map((name, index) => (
                    <li key={index}>
                        {name.substring(0, name.length - 4)} {/* Extract file name without ".pdf" */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Algo;