import { useEffect, useState } from 'react';

const LoadItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return [items, setItems];

};

export default LoadItems;