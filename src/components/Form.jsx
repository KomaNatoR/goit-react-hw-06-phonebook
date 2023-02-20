import PropTypes from 'prop-types';

import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

const initialValues = {
    name: '',
    number: '',
};

const FormikForm = ({hendleSubmit}) => {
    const onSubmit = ({ name, number }, actions) => {
        let id = nanoid();

        let person = { id: id, name: name, number:number };
        hendleSubmit(person);
        actions.resetForm();
    };

    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
            <Form >
                <label >Name
                    <Field 
                        type="text"
                        name="name"
                        placeholder="FormikForm"
                        required
                    />
                    {/* <ErrorMessage name="name" component="div" /> */}
                </label>
                <label>Number
                    <Field 
                        type="tel"
                        name="number"
                        placeholder="FormikForm"
                        required
                    />
                    {/* <ErrorMessage name="number" component="div" /> */}
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};
FormikForm.propTypes = {
    hendleSubmit:PropTypes.func.isRequired,
};

export default FormikForm;