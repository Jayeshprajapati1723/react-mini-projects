
import { useForm } from "react-hook-form";

function DetailFORM() {
  const { register, handleSubmit } = useForm();

  function handleform(data) {
    console.log(data);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleform)}>
          <label>Name</label>
          <input type="text" id="name" {...register("names")} />

          <input type="tel" id="age" {...register("age")} />

          <input type="password" id="pass" {...register("pass")} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export { DetailFORM };
