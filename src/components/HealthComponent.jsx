import React, { useEffect, useState } from 'react';

const HealthComponent = () => {
  const [isHealthy, setIsHealthy] = useState(null);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await fetch('/api/v1/health');
        const data = await response.json();
        setIsHealthy(data.healthy);
      } catch (error) {
        setIsHealthy(false);
      }
    };
    fetchHealth();
  }, []);

  return (
    <div>
      {isHealthy !== null && (
        <span style={{
          color: isHealthy ? 'green' : 'red'
        }}>
          {isHealthy ? 'Healthy' : 'Unhealthy'}
        </span>
      )}
    </div>
  );
};

export default HealthComponent;