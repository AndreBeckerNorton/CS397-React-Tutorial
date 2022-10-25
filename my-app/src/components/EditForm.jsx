import { useFormData } from '../utilities/formdata';
import { useDbUpdate } from '../utilities/firebase';

import { useNavigate, useParams } from 'react-router-dom';

const validateUserData = (key, val) => {
    switch (key) {
        case 'title':
            return /(^\w\w)/.test(val) ? '' : 'Invalid input.';
        case 'meets':
            return /[M|Tu|W|Th|F]+ [0-1][0-9]:[0-9][0-9]-[0-1][0-9]:[0-9][0-9]/gm.test(val) ? '' : 'Invalid input';
        default: return '';
    }
};

const InputField = ({ name, text, state, change }) => (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{text}</label>
        <input className="form-control" id={name} name={name}
            defaultValue={state.values?.[name]} onChange={change} />
        <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
);

const ButtonBar = ({ message, disabled }) => {
    const navigate = useNavigate();
    return (
        <div className="d-flex">
            <button disabled={disabled}>Submit</button>
            <span>{message}</span>
            <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
    );
};

const EditForm = ({ courses }) => {
    const [update, result] = useDbUpdate(`/courses/${id}`);
    const [state, change] = useFormData(validateUserData, courses[id]);
    const {id} = useParams();
    const navigate = useNavigate();
    const submit = (evt) => {
        evt.preventDefault();
        if (!state.errors) {
            console.log("Valid");
            update(state.values);
            navigate(-1);
        }
    };

    return (
        <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
            <InputField name="title" text="Course Title" state={state} change={change} />
            <InputField name="meets" text="Meeting Times" state={state} change={change} />
            <ButtonBar message={result?.message}/>
        </form>
    )
};

export default EditForm;