const Form = ({ children }: { children: React.ReactNode }) => {
  return (
    <form className="rounded-lg bg-light-solid w-[390px] h-[506px] flex flex-col items-center justify-center p-6 shadow-lg">
        {children}
    </form>
  );
};

export default Form;