export interface GroupDetail {
    id: number;
    name: string;
    description: string;
    image: string;
    date: Date | null;
    createdAt: Date;
    createdById: number;
}