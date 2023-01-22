import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import './style.scss';

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Form onSubmit={handleSubmit(onSubmit)} className="content-form">
    <Form.Group className="mb-3" controlId="formShortenURL">
        <div className='input-container'>
            <Form.Control
                {...register("originalUrl", { required: true })}
                className='input-field'
                type="text"
                placeholder="Type a URL to shorten..." />
        </div>
    </Form.Group>
</Form>
  );
}