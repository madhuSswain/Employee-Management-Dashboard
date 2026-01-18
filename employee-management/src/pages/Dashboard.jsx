import React from 'react'

const Dashboard = () => {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Rakesh Kumar',
      gender: 'Male',
      dob: '1990-05-15',
      state: 'Odisha',
      image: '',
      active: true
    },
    {
      id: 2,
      name: 'Payal sharma',
      gender: 'Female',
      dob: '1992-08-20',
      state: 'Delhi',
      image: '',
      active: true
    },
    {
      id: 3,
      name: 'Anil verma',
      gender: 'Male',
      dob: '1988-12-10',
      state: 'Gujarat',
      image: '',
      active: false
    }
  ]);

  return (
    <></>
  );
};

export default Dashboard;