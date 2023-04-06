import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 col-6 mx-auto">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 5 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-center text-danger mt-2">Nom requise</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-center text-danger mt-2">Minimum 5 caractèère</p>
        )}
      </div>
      <div className="mb-3 col-6 mx-auto">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true, minLength: 2 })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-center text-danger">Age requise</p>
        )}
        {errors.age?.type === "minLength" && (
          <p className="text-center text-danger">min 2 chiffre</p>
        )}
      </div>
      <div className="text-center">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
