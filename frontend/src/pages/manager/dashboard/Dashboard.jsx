import React from 'react';
import CircularText from './CircularText';
import ShinyText from './ShinyText';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Spinner from '../../../reusableComponents/Spinner';
import { miyagi } from 'ldrs';

miyagi.register();

const Dashboard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['emp'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/api/employee/');
      return response.data;
    },
  });

  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div className="border border-red w-20 h-20">
      <CircularText
        text="REACT*BITS*COMPONENTS*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
      <div className="p-4 bg-red-500">
        <ShinyText
          text="Just some shiny text!"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1 className="text-red-500">hey</h1>
    </div>
  );
};

export default Dashboard;
