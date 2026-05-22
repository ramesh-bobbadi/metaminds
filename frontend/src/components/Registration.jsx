import React, { useState } from 'react'
import AxiosInstance from './Axios'

function Registration() {

    const [formdata, setFormdata] = useState(
        {
            username: '',
            email: '',
            password: '',
            role: '',
            phone_number: '',

        }
    )
    console.log(formdata)

    const formhadler = (event) => setFormdata({ ...formdata, [event.target.name]: event.target.value })
    const submithandler = async (event) => {
        event.preventDefault()
        try {
            const response = await AxiosInstance.post('userregister/', formdata)
            console.log(response.data)
            alert('User Register Succesfully')

            setFormdata({
                username: '',
                email: '',
                password: '',
                role: '',
                phone_number: '',
            })
        }
        catch (error) {
            console.error(error, response.data)
            alert('Registration Failed')
        }


    }
    return (
        <div >
            <form onSubmit={submithandler} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', height: '40vh' }}>
                <input
                    type='text'
                    name='username'
                    value={formdata.username}
                    onChange={formhadler}
                />
                <input
                    type='email'
                    name='email'
                    value={formdata.email}
                    onChange={formhadler}
                />
                <input
                    type='password'
                    name='password'
                    value={formdata.password}
                    onChange={formhadler}
                />
                <select
                    name='role'
                    value={formdata.role}
                    onChange={formhadler}
                >
                    <option value=''>select role</option>
                    <option value="hr">Hr</option>
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>
                </select>
                <input
                    type='tel'
                    name='phone_number'
                    value={formdata.phone_number}
                    onChange={formhadler}
                />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Registration