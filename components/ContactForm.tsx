import React, { FormEvent } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type Props = {};

export default function ContactForm({}: Props) {
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				message: '',
			}}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(15, 'El campon debe tener 15 carácteres o menos')
					.required('Campo Obligatorio'),
				lastName: Yup.string()
					.max(30, 'El campo debe tener 30 carácteres o menos.')
					.required('Campo Obligatorio'),
				email: Yup.string()
					.email('Dirección de correo no válida')
					.required('Campo Obligatorio'),
				message: Yup.string()
					.max(
						1000,
						'El mensaje no puede tener más de 1,000 carácteres.'
					)
					.required('Campo obligatorio'),
			})}
			onSubmit={(values, { setSubmitting }) => {
				fetch('/api/contactFormApi', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(values),
				}).then((res) => {
					console.log('Response received');
					if (res.status === 200) {
						console.log('Response Succeeded');
					}
				});
				setSubmitting(false);
			}}
		>
			{(formik) => (
				<Form
					action="/api/contactFormApi"
					method="POST"
					className="mx-auto grid w-full max-w-2xl grid-cols-2 place-content-center gap-3 rounded-md border-2 py-10 shadow-md"
					onSubmit={formik.handleSubmit}
				>
					<div className="col-span-1 flex flex-col gap-2 px-5">
						<label className="font-medium" htmlFor="firstName">
							Nombre:
						</label>
						<Field
							className="min-w-fit max-w-md rounded-t-md border-b-2 border-b-yellow bg-gray-100 px-2"
							type="text"
							id="firstName"
							{...formik.getFieldProps('firstName')}
						/>
						<div className="h-8 text-xs text-red">
							<ErrorMessage name="firstName" />
						</div>
					</div>
					<div className="flex flex-col gap-2 px-5">
						<label className="font-medium" htmlFor="lastName">
							Apellido:
						</label>
						<Field
							className="min-w-fit max-w-md rounded-t-md border-b-2 border-b-yellow bg-gray-100 px-2"
							type="text"
							id="lastName"
							{...formik.getFieldProps('lastName')}
						/>
						<div className="h-8 text-xs text-red">
							<ErrorMessage name="lastName" />
						</div>
					</div>
					<div className="col-span-2 mx-auto flex w-full flex-col gap-2 px-5">
						<label className="font-medium" htmlFor="email">
							Correo Electrónico:
						</label>
						<Field
							className="max-w-full rounded-t-md border-b-2 border-b-yellow bg-gray-100 px-2"
							type="email"
							id="email"
							{...formik.getFieldProps('email')}
						/>
						<div className="h-8 text-xs text-red">
							<ErrorMessage name="email" />
						</div>
					</div>
					<div className="col-span-2 flex flex-col gap-2 px-5">
						<label className="font-medium" htmlFor="message">
							Mensaje:
						</label>
						<Field
							className="h-48 resize-none rounded-md border-2 border-yellow bg-gray-100 px-2"
							as="textarea"
							id="textarea"
							{...formik.getFieldProps('message')}
						/>
						<div className="h-8 text-xs text-red">
							<ErrorMessage name="message" />
						</div>{' '}
					</div>
					<button
						className={`col-span-2 mx-auto w-20 rounded-lg border-2 border-gray-500 p-2 transition-all ${
							formik.isValid &&
							'hover:scale-105 hover:border-yellow hover:text-gray-800 active:scale-95'
						} `}
						type="submit"
						disabled={!(formik.isValid && formik.dirty)}
					>
						Enviar
					</button>
				</Form>
			)}
		</Formik>
	);
}
