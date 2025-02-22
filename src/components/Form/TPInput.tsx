/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { Input } from "../ui/input"; 
import { Label } from "../ui/label"; 
interface TPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string; 
  register: any; 
  className?: string;
  label?: string; 
  placeholder?: string; 
}

const TPInput: React.FC<TPInputProps> = ({
  className,
  register,
  name,
  label,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <div className="">
       
        <Label className="font-medium text-primary-text">{label}</Label>

       
        <Input
          className={clsx(
            "px-4 py-3 bg-primary-bg rounded-lg mt-2 border-none", 
            className 
          )}
          placeholder={placeholder}
          {...register(name)}
          {...rest} 
        />
      </div>
    </>
  );
};

export default TPInput;
