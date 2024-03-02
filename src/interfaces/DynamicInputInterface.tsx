import { FieldError } from "react-hook-form";

export interface DynamicInputInterface {
    label: string;
    placeholder: string;
    value?: string;
    errors?: FieldError;
    type: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    registerName?: string;
    register?: any;
}
