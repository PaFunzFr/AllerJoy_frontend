export interface GroupDetailDto {
    id: number;
    name: string;
    description: string;
    image: string | null;
    date: string | null;
    created_by: number;
    created_at: string;
}
