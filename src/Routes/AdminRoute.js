import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const location = useLocation();
    // const [admin, setAdmin] = useState('');
    // useEffect(()=>{
    //     fetch("http://localhost:5000/user")
    //     .then(res=>res.json())
    //     .then(data=>setAdmin(data));
    // },[])
    const {data: admin={}, refetch} = useQuery({
        queryKey:['user'],
        queryFn: async()=>{
            const res = await fetch("http://localhost:5000/user");
            const data = await res.json();
            return data;
        }
    })
    if (admin.email === "shah@jahan.com" && admin.password === "Abcd1#" && admin.role === "admin"){
        refetch();
        return children;
    }
    return (
      <Navigate
        to="/loginFoodBox"
        state={{ from: location }}
        replace
      ></Navigate>
    );
};

export default AdminRoute;