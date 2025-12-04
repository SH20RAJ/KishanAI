export interface Comment {
    id: number;
    user: string;
    content: string;
    time: string;
    avatar?: string;
}

export interface Post {
    id: number;
    user: string;
    location: string;
    time: string;
    content: string;
    image: string | null;
    likes: number;
    comments: Comment[];
    category?: string;
    isExpert?: boolean;
}
