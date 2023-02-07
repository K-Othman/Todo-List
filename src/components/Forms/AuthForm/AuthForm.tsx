import Button from "../../Button/Button";
import { SchemaOf, object, string } from "yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import Input from "../../Input/Input";
// import { useNavigate } from "react-router-dom";

interface IFormInputs {
  email: string;
  password: string;
}

const formSchema: SchemaOf<IFormInputs> = object({
  email: string()
    .email("Please enter a valid email.")
    .required("Email is required."),
  password: string()
    .min(6, "Password must be at least 6 characters.")
    .max(12, "Password must be at most 12 characters")
    .required("Password is required"),
});

const AuthForm = () => {
  // const navigate = useNavigate();

  const methods = useForm<IFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "karim@karim.com",
      password: "019283",
    },
  });

  console.log(methods.formState.errors);

  const submitLogin: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data);
    // navigate("/home", { replace: true });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitLogin)}>
        <div className="flex flex-col w-1/2">
          <Input
            id="email-field"
            type="text"
            placeholder="email"
            error={!!methods.formState.errors["email"]}
            {...methods.register("email")}
          />
          <input
            type="password"
            placeholder="password"
            {...methods.register("password")}
          />
          <Button
            id="login button"
            fullWidth={true}
            submit={true}
            text="Login"
            variant="primary"
          />
        </div>
        <div className="absolute mt-1 leading-none">
          {methods.formState.errors && (
            <>
              <ErrorMessage
                errors={methods.formState.errors}
                name="email"
                render={({ message }) => (
                  <p className="text-red-600">{message}</p>
                )}
              />
            </>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default AuthForm;
