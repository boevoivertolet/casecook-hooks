import { Field, Form, Formik, FormikHelpers } from 'formik'
import s from '../../LoginPage/LoginPage.module.css'
import * as React from 'react'
import { validation } from '../../../utils/validation'
import { addProfilePost } from '../profilePageReducer'
import { useAppDispatch } from '../../../app/store'

interface Values {
      message: string
}

export const AddPostForm = () => {
      const dispatch = useAppDispatch()
      return (
            <div>
                  <Formik
                        initialValues={{
                              message: '',
                        }}
                        onSubmit={(values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
                              console.log(values)

                              setTimeout(() => {
                                    // dispatch(login(values))
                                    // console.log(values.message)
                                    dispatch(addProfilePost(values.message))
                                    resetForm()
                                    setSubmitting(false)
                              }, 500)
                        }}
                  >
                        {({ errors, touched }) => (
                              <Form className={s.form}>
                                    <label htmlFor='email'>
                                          your message
                                          <Field
                                                type={'text'}
                                                id='message'
                                                name='message'
                                                validate={validation.validateMessage}
                                          />
                                          {errors.message && touched.message && <div>{errors.message}</div>}
                                    </label>
                                    <button type='submit'>send</button>
                              </Form>
                        )}
                  </Formik>
            </div>
      )
}
