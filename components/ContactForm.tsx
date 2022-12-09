import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type Props = {};

type Values = {
	firstName: string;
	lastName: string;
	email: string;
};

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
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{(formik) => (
				<Form
					className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 rounded-md border-2 shadow-md"
					onSubmit={formik.handleSubmit}
				>
					<div className="flex flex-col gap-2">
						<label htmlFor="firstName">Nombre:</label>
						<Field
							className="min-w-fit max-w-md border-b-2 border-b-yellow"
							type="text"
							id="firstName"
							{...formik.getFieldProps('firstName')}
						/>
						<ErrorMessage name="firstName" className="h-8" />
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="lastName">Apellido:</label>
						<Field
							className="min-w-fit max-w-md border-b-2 border-b-yellow"
							type="text"
							id="lastName"
							{...formik.getFieldProps('lastName')}
						/>
						<ErrorMessage name="lastName" className="h-8" />
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="email">Correo Electrónico:</label>
						<Field
							className="min-w-fit max-w-md border-b-2 border-b-yellow"
							type="email"
							id="email"
							{...formik.getFieldProps('email')}
						/>
						<ErrorMessage name="email" />
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="message">Mensaje:</label>
						<Field
							className="resize-none "
							as="textarea"
							id="textarea"
							{...formik.getFieldProps('message')}
						/>
						<ErrorMessage name="message" />
					</div>
					<button type="submit">Enviar</button>
				</Form>
			)}
		</Formik>
	);
}
