import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import FormList from '../FormList/FormList';
import FormComponent from '../FormComponent/FormComponent';
import {useFormWithValidation} from "../../hooks/useForm"
import logoEyeOff from '../../images/eyeOff.svg';

function Register ({registration}) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [inputActive, setInputActive] = useState(false);
    
    const emailForRequest =  'eve.holt@reqres.in';
    const passwordForRequest = 'pistol';
    const inputError = 'Пароли не совпадают.';
    const notConfirmedPassword = confirmPassword !== values.password;

    const checkInputValidity = (
        !values.email || !values.password
        || errors.email || errors.password 
        || notConfirmedPassword)
        ? 
        true 
        : 
        false
    ;
    
    const viewLogoEye = (
        values.password
    ? 
        <img className="partnerInfo__icon" src={logoEyeOff} alt="Изображение закрытого глаза"/>
    :
        null
    )
    
    function handleSubmit(e) {
        e.preventDefault();
        registration(values.email=emailForRequest, values.password=passwordForRequest);
        resetForm();
    }

    function handleChangeConfirmPassword(e) {
        setInputActive(true)
        setConfirmPassword(e.target.value);
    }

    return (
        <div>
            <FormList
                title = {'Регистрация'} name={'Регистрация'}
                disabled={checkInputValidity} 
                onSubmit={handleSubmit} buttonText = {'Зарегистрироваться'}
            >
                <FormComponent name = {'Имя'} value = {values.name || ''} onChange = {handleChange}
                    minLength = {'1'} maxLength = {'30'} required type = {'text'} nameInput ={'name'}
                />
                <p className="Formlist__input-error">{errors.name}</p>    
                
                <FormComponent name = {'Электронная почта'} value = {values.email || ''} onChange = {handleChange}
                    minLength = {'1'} maxLength = {'30'} required type = {'email'} nameInput ={'email'}
                />
                <p className="Formlist__input-error">{errors.email}</p>
                
                <FormComponent name = {'Пароль'} value = {values.password || ''} onChange = {handleChange}
                    minLength = {'4'}  required type = {'password'} nameInput ={'password'}
                > 
                    {viewLogoEye}
                </FormComponent>
                <p className="Formlist__input-error">{errors.password}</p> 

                <FormComponent name = {'Подтвердите пароль'} value = {confirmPassword || ''} 
                    onChange = {handleChangeConfirmPassword}
                    minLength = {'4'}  required type = {'password'} nameInput ={'confirmPassword'}
                >
                    {viewLogoEye} 
                </FormComponent>
                <p className="Formlist__input-error">{inputActive && notConfirmedPassword ? inputError : ''}</p>    

            </FormList>
        </div>
    )
}

export default Register;