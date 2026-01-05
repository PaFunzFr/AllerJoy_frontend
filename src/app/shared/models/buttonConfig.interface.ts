export interface ButtonConfig {
    label: string;
    onClick: () => void;
    backgroundColor?: string;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
}
