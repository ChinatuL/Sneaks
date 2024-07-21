type BtnYellowProps = {
    children: React.ReactNode;
    type: "button" | "submit" | "reset";
    style: string;
};

const BtnYellow = ({ children, style, type }: BtnYellowProps) => {
    return (
        <button
            type={type}
            className={`bg-darkYellow text-white rounded-radius transition-ease hover:opacity-80 ${style}`}
        >
            {children}
        </button>
    );
};
export default BtnYellow;
