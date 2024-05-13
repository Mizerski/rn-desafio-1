
export interface ModalCardProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    onPress?: () => void;
    children?: ReactNode;
    backgroundColor?: string;
    title: string;
}