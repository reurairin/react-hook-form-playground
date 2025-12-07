import { useForm } from "react-hook-form";
import { TextInputRegisterWithProps } from "../../input/TextInputRegisterWithProps/TextInputRegisterWithProps";
import Button from "@mui/material/Button";
import { Stack, TextField } from "@mui/material";
import styles from "./DemoForm.module.css";

type DemoFormState = {
  firstName: string;
  lastName: string;
};

export function DemoForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DemoFormState>();

  const onSubmit = (state: any) => {
    console.log("Form State", state);
  };

  return (
    <>
      <h1>Demo Form Props</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <Stack spacing={2}>
          <TextField
            label={"First Name"}
            variant="outlined"
            {...register("firstName", {required: true})}
          />
          <TextInputRegisterWithProps
            id="lastName"
            label="Last Name"
            required
            errors={errors}
            register={register}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}
