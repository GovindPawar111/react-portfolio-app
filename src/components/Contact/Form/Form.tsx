import React from 'react'
import './Form.scss'

import { send } from 'emailjs-com'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const serviceId = import.meta.env.VITE_PORTFOLIO_SERVICE_ID
const templateId = import.meta.env.VITE_PORTFOLIO_TEMPLATE_ID
const userId = import.meta.env.VITE_PORTFOLIO_USER_ID

type FormData = {
    'from-name': string
    'reply-to': string
    'phone-number': string
    subject: string
    message: string
}

const Form: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const submitHandler = (data: any) => {
        if (
            serviceId !== undefined &&
            templateId !== undefined &&
            userId !== undefined
        ) {
            send(serviceId, templateId, data, userId)
                .then((response) => {
                    console.log('success', response.status)
                    formSuccess()
                })
                .catch((error) => {
                    console.log('Failed', error)
                })
        }
    }

    const formSuccess = (): void => {
        toast('Thanks for submitting your Query!')
        const formElement = document.querySelector('form')
        if (formElement) {
            formElement.reset()
        }
    }

    return (
        <div className="query-form">
            <ToastContainer />
            <form id="queryForm" onSubmit={handleSubmit(submitHandler)}>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register('from-name', {
                            required: true,
                            maxLength: {
                                value: 16,
                                message: 'Maximum 16 characters are allowed',
                            },
                        })}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Email"
                        {...register('reply-to', {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Phone number"
                        {...register('phone-number', {
                            required: true,
                            minLength: {
                                value: 8,
                                message: 'Phone number is not valid',
                            },
                        })}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Subject"
                        {...register('subject', {
                            required: true,
                            minLength: {
                                value: 10,
                                message: 'Minimum 10 characters required',
                            },
                        })}
                    />
                </div>
                <div className="input-field full-width">
                    <textarea
                        className="textarea"
                        placeholder="Your message"
                        {...register('message', {
                            required: true,
                            minLength: {
                                value: 20,
                                message: 'Minimum 20 characters required',
                            },
                            maxLength: {
                                value: 500,
                                message: 'maximum 500 characters allowed',
                            },
                        })}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
