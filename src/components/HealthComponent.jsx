import React, { useEffect, useState } from 'react';

const HealthComponent = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await fetch('/api/v1/health');
        const data = await response.json();
        setStatus(data.healthy ? 'Healthy' : 'Unhealthy');
      } catch (error) {
        setStatus('Unhealthy');
      }
    };
    fetchHealth();
  }, []);

  return (
    <div>
      <span className={status === 'Healthy' ? 'badge green' : 'badge red'}>
        {status}
      </span>
    </div>
  );
};

export default HealthComponent;

// Styles (assumes you have some CSS setup):
// .badge { padding: 5px; border-radius: 3px; }
// .green { background-color: green; color: white; }
// .red { background-color: red; color: white; }