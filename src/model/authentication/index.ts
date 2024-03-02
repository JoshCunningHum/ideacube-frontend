export interface ClassSerializer {
    id?: number;
    name: string;
    passKey: string;
}

export interface StudentSerializer {
    id: number | string;
    enrolledClass: number | string;
}

export interface UserSerializer {
    id?: number;
    username: string;
    first_name?: string;
    last_name?: string;
    is_superuser?: boolean;
    last_login?: string | null;
}

