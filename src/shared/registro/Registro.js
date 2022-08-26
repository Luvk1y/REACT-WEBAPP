import { createUserWithEmailAndPassword  } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { set,ref } from 'firebase/database';
import { db } from '../../utilities/firebase_config';
import { useAuth } from '../../Context/auth';


export const Registro = () => {
    const [data, setData]= useState({
        name:'',
        email: '',
        password: '',
        error: null,
        loading: false,
    });
    const {name,email,password,error,loading}=data;
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name || !email || !password){
            setData({...data,error:'All fields are requested'});
        }
        try {
            const result = await createUserWithEmailAndPassword(
                useAuth,
                email,
                password
            );
            await set(ref(db, 'users/' + userId), {
                username: name,
                email: email,
                password: password
              });
        }catch(error) {}
    
    };
    return (
        <section>
            <h3>Registro de cuenta</h3>
            <form classname='form'>
                <div classname='input-container'>
                <label htmlfor='name'>Nickname</label>
                <input 
                    type='text'
                    name='name' 
                    value={name} 
                    onChange={handleChange}></input>
                </div>
                <div classname='input-container'>
                <label htmlfor='email'>Email</label>
                <input 
                    type='text' 
                    name='email' 
                    value={email} 
                    onChange={handleChange}/>
                </div>
                <div classname='input-container'>
                <label htmlfor='password'>Password</label>
                <input 
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={handleChange}/>
                </div>
                {error ? <p className='error'>{error}</p>:null}
                <div className="btn_container">
                    <button 
                        className='btn' 
                        onClick={handleSubmit}>Sign in</button>
                </div>
            </form>
        </section>
    )
}