import React, { useEffect, useState } from 'react';

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-rust.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isSeller, isAdminLoading]
}

export default useSeller;

// import { useEffect, useState } from "react"

// const useAdmin = email => {
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [isAdminLoading, setIsAdminLoading] = useState(true);
//     useEffect(() => {
//         if (email) {
//             fetch(`https://doctors-portal-server-rust.vercel.app/users/admin/${email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     setIsAdmin(data.isAdmin);
//                     setIsAdminLoading(false);
//                 })
//         }
//     }, [email])
//     return [isAdmin, isAdminLoading]
// }

// export default useAdmin;