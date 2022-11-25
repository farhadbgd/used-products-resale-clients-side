// import React from 'react';

// const AddAProduct = () => {
//     return (
//         <div>
//             <h1>Hello</h1>
//         </div>
//     );
// };

// export default AddAProduct;









import { useState } from "react";
import { Form } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";


const AddAProduct = () => {

    const [users, setUsers] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);
        // fetch('https://b6a11-service-review-server-side-farhadbgd.vercel.app/services', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(users),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.acknowledged) {

        //         }
        //         console.log(data);
        //         e.target.reset();
        //     })

    }
    const handleBlur = (e) => {
        const name = e.target.name;
        const nameValue = e.target.value;
        const newUser = { ...users };
        newUser[name] = nameValue;
        setUsers(newUser);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input onBlur={handleBlur} style={{ padding: "10px" }} type="text" name='title' placeholder="Service Name" /> <br />
                <input onBlur={handleBlur} style={{ padding: "10px" }} type="number" name='fee' placeholder="Service Fee " /><br />
                <input onBlur={handleBlur} style={{ padding: "10px" }} type="text" name='details' placeholder="Service details" /><br />
                <input onBlur={handleBlur} style={{ padding: "10px" }} type="text" name='img' placeholder="images URL" /><br />


                <PrimaryButton className='w-100' variant="primary" type="submit" size="lg">
                    Submit to add service
                </PrimaryButton>
            </form>

        </div>
    );
};

export default AddAProduct;