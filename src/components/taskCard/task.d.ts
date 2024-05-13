export interface TaskCardProps {
    title?: string;
    onPress?: () => void;
    onEdit?: (value) => void;
    onCheckboxChange?: (value: boolean) => void;
}
