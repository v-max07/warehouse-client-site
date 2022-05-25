import { useEffect, useState } from 'react';

const LoadItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://quiet-headland-11687.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return [items, setItems];

};

export default LoadItems;