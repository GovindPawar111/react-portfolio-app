import React from 'react'
import './Form.scss'

import { send } from 'emailjs-com'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const serviceId = import.meta.env.VITE_PORTFOLIO_SERVICE_ID
const templateId = import.meta.env.VITE_PORTFOLIO_TEMPLATE_ID
const userId = import.meta.env.VITE_PORTFOLIO_USER_ID

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
                    <input type="text" name="from-name" placeholder="Name" />
                </div>
                <div className="input-field">
                    <input type="text" name="reply-to" placeholder="Email" />
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        name="phone-number"
                        placeholder="Phone"
                    />
                </div>
                <div className="input-field">
                    <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="input-field full-width">
                    <textarea
                        className="textarea"
                        name="message"
                        placeholder="Your message"
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
