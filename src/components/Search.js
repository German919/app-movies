
import { ErrorMessage, Field, Form, Formik } from 'formik';
import {useNavigate} from "react-router-dom";
import styles from "./search.module.css";
import {FaSearch} from "react-icons/fa"
import { useQuery } from '../hooks/useQuery';
import { useState } from 'react';

export const Search = () => {

    const navigate = useNavigate();

    const search = useQuery().get("search");

    const handleChange = (e) => {
        const value = e.target.value;
        navigate(`/?search=${value}`)
    }

    return (
        <Formik
            initialValues={{name:""}}
            onSubmit={({name}, acciones)=> {
                navigate(`/?search=${name}`)
                acciones.resetForm({name:""})
                
            }}
        >
            {
                () => (
                    <Form className={styles.container}>
                        <div className={styles.box}>
                            <Field 
                                name="name"
                                className={styles.input}
                                placeholder="search..."
                                value = {search || ""}
                                onChange={handleChange}
                            />
                             
                            <button  
                                className={styles.button}>
                                <FaSearch size={20}/> </button>
                        </div>
                    </Form>
                )
            }   
        </Formik>
    )
}
