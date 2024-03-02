import { DynamicInputInterface } from "@/interfaces/DynamicInputInterface";

const DynamicInput = ({ label, placeholder, value, errors, type, registerName, register, ...rest }: DynamicInputInterface) => {
    return (
        <div className=" flex flex-col mb-4 w-full">
            <label className='body-bold mb-2'>{label}</label>
            <div className={`relative z-0 ${errors ? "after:absolute after:content-[''] after:bg-cover after:w-5 after:h-5 after:bg-alert after:right-3 after:inset-y-1/2 after:z-30 after:-translate-y-2/4" : ""}`}>
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`w-full p-3 border border-gray-300 ease duration-300 outline-magenta/0 outline outline-offset-0 outline-4 rounded-lg ${errors ? "border-red-600 focus:outline-red-600/50 hover:border-red-600 pr-8" : "focus:outline-magenta/50 hover:border-magenta"}`}
                    value={value}
                    {...register(registerName)}
                    {...rest}
                />
            </div>
            {errors && <span className="label ease duration-300 text-red-600 mt-2">{errors.message}</span>}
        </div>
    );
};

export default DynamicInput;
