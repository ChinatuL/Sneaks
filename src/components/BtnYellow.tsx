type BtnYellowProps = {
    children: React.ReactNode;
    type: "button" | "submit" | "reset";
    style: string;
    small?: boolean;
};

const BtnYellow = ({ children, style, type, small }: BtnYellowProps) => {
    return (
        <button
            type={type}
            className={`bg-darkYellow text-white transition-ease hover:opacity-80 ${style} ${
                small ? "rounded" : "rounded-radius"
            }`}
        >
            {children}
        </button>
    );
};
export default BtnYellow;
