export interface DynamicButtonInterface {
    ariaLabel: string;
    title: string;
    children: React.ReactNode;
    className: string;
    id: string;
    role: string;
    type: string;
    onMouseLeave?: () => void;
    onMouseEnter?: () => void;
    onClick?: () => void;
}