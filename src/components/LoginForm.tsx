import 'react-app-polyfill/ie11'
import * as React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { login } from '../app/authReducer'
import { useAppDispatch } from '../app/store'
import { validation } from '../utils/validation'
import s from '../pages/LoginPage/LoginPage.module.css'

interface Values {
      email: string
      password: string
      rememberMe: boolean
}

export const LoginForm = () => {
      const dispatch = useAppDispatch()
      return (
            <div
                  style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                  }}
            >
                  <h1>Login</h1>
                  <Formik
                        initialValues={{
                              email: '',
                              password: '',
                              rememberMe: false,
                        }}
                        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                              console.log(values)

                              setTimeout(() => {
                                    dispatch(login(values))
                                    setSubmitting(false)
                              }, 500)
                        }}
                  >
                        {({ errors, touched }) => (
                              <Form className={s.form}>
                                    <label htmlFor='email'>
                                          Email:
                                          <Field
                                                type={'email'}
                                                id='email'
                                                name='email'
                                                validate={validation.validateEmail}
                                          />
                                          {errors.email && touched.email && <div>{errors.email}</div>}
                                    </label>

                                    <label htmlFor='password'>
                                          Password:
                                          <Field
                                                type={'password'}
                                                id='password'
                                                name='password'
                                                validate={validation.validatePass}
                                          />
                                          {errors.password && touched.password && <div>{errors.password}</div>}
                                    </label>

                                    <label htmlFor='rememberMe'>
                                          Remember me
                                          <Field id='rememberMe' name='rememberMe' type='checkbox' />
                                    </label>

                                    <button type='submit'>Submit</button>
                              </Form>
                        )}
                  </Formik>
            </div>
      )
}

export type LoginFormDataType = {
      email: string
      password: string
      rememberMe: boolean
}
