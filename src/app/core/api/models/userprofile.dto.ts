export interface UserProfileDto {
    id: number;
    name: string;
    description: string;
    image: string | null;
    date: string | null;
    created_by: string;
    created_at: string;
}