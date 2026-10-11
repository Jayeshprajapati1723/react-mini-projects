import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers" ;
import {z} from "zod" ;
export {ZodDetailFORM} ;
function ZodDetailFORM() {
  const { register, hadlesubmit } = useForm();
  function handleform(data) {}

const formschema = z.object({
// form validation schema define 
name : z.string().min(3,"minimum length should be 3").max(20,"max length should be 20 "),
age:z.number().min(18,"age must be greater or equal to 18 years").max(65,"age must be less than or equal 65") ,
pass : z.string().min(8,"minimum eight character "),
// schema bna liya ab attach kese kre useform ke sath iske liye apn ko form resolver chahiye npm install se 
})

  return (
    <>
      <div>
        <form onSubmit={handleform}>
          <label>Name</label>
          <input
            type="text"
            id="name"
            {...register("names")}
            value={names}
          ></input>
          <input type="tel" id="age" {...register("age")} value={age}></input>
          <input
            type="password"
            id="pass"
            {...register("pass")}
            value={pass}
          ></input>
        </form>
      </div>
      <div>
        <butoon> submit</butoon>
      </div>
    </>
  );
}
export { DetailFORM };
