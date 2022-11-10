interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child = ({
    color,
    onClick,
    children
}: ChildProps) => {
    return (
        <div>
            {children}
            {color}
            <button onClick={onClick}>Click</button>
        </div>
    );
};

export const ChildFC: React.FC<ChildProps> = ({
    color,
    onClick,
    children
}) => {
    return (
        <div>
            {children}
            {color}
            <button onClick={onClick}>Click</button>
        </div>
    );
}