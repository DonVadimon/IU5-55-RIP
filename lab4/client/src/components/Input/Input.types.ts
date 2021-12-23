export type InputProps = Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'name'
> & {
    name: string;
    required?: boolean;
};
