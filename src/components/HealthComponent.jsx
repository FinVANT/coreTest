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
      {isHealthy === null ? (
        <span>Loading...</span>
      ) : isHealthy ? (
        <span style={{ color: 'green' }}>Service is Healthy</span>
      ) : (
        <span style={{ color: 'red' }}>Service is Unhealthy</span>
      )}
    </div>
  );
};

export default HealthComponent;