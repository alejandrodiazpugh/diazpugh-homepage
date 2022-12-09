import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "El campon debe tener 15 carácteres o menos")
          .required("Campo Obligatorio"),
        lastName: Yup.string()
          .max(30, "El campo debe tener 30 carácteres o menos.")
          .required("Campo Obligatorio"),
        email: Yup.string()
          .email("Dirección de correo no válida")
          .required("Campo Obligatorio"),
        message: Yup.string()
          .max(1000, "El mensaje no puede tener más de 1,000 carácteres.")
          .required("Campo obligatorio"),
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
          className="mx-auto grid w-full max-w-2xl grid-cols-2 place-content-center gap-3 rounded-md border-2 py-10 shadow-md"
          onSubmit={formik.handleSubmit}
        >
            <div className="col-span-1 flex flex-col gap-2 px-5">
              <label className="font-medium" htmlFor="firstName">
                Nombre:
              </label>
              <Field
                className="min-w-fit max-w-md rounded-t-md border-b-2 px-2 border-b-yellow bg-gray-100"
                type="text"
                id="firstName"
                {...formik.getFieldProps("firstName")}
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
                className="min-w-fit px-2 bg-gray-100 rounded-t-md max-w-md border-b-2 border-b-yellow"
                type="text"
                id="lastName"
                {...formik.getFieldProps("lastName")}
              />
              <div className="h-8 text-xs text-red">
                <ErrorMessage name="lastName" />
              </div>
            </div>
          <div className="flex flex-col px-5 gap-2 col-span-2 w-full mx-auto">
            <label className="font-medium" htmlFor="email">
              Correo Electrónico:
            </label>
            <Field
              className="max-w-full px-2 bg-gray-100 rounded-t-md border-b-2 border-b-yellow"
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
            />
            <div className="h-8 text-xs text-red">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="flex flex-col gap-2 col-span-2 px-5">
            <label className="font-medium" htmlFor="message">
              Mensaje:
            </label>
            <Field
              className="resize-none h-48 px-2 border-yellow rounded-md border-2"
              as="textarea"
              id="textarea"
              {...formik.getFieldProps("message")}
            />
            <div className="h-8 text-xs text-red">
              <ErrorMessage name="message" />
            </div>{" "}
          </div>
          <button className="col-span-2 border-gray-500 border-2 mx-72 p-2 rounded-lg transition-all hover:scale-105 hover:text-gray-800 active:scale-95 hover:border-yellow" type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
}
