/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
  FieldValues,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitErrorHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const TPForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    // methods.reset(); 
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className="space-y-4">
        {children}
      </form>
    </FormProvider>
  );
};

export default TPForm;
