import React, { useEffect, useState } from 'react';

const HealthComponent = () => {
    const [health, setHealth] = useState(null);

    useEffect(() => {
        const fetchHealth = async () => {
            try {
                const response = await fetch('/api/v1/health');
                const data = await response.json();
                setHealth(data.healthy);
            } catch (error) {
                console.error('Error fetching health status', error);
                setHealth(false);
            }
        };
        fetchHealth();
    }, []);

    return (
        <div>
            {health !== null && (
                <span style={{
                    color: health ? 'green' : 'red'
                }}>
                    {health ? 'Healthy' : 'Unhealthy'}
                </span>
            )}
        </div>
    );
};

export default HealthComponent;