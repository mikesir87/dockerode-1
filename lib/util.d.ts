export type Callback<T> = (err: Error, data: T) => void;
export type Dictionary<T> = { [key: string]: T };
export type Boolean = 1 | 0 | boolean;
export type AuthConfig = Auth | Identity | string;
export type Timestamp = string | number;
export type Filters = string | Dictionary<string | string[]>;

export interface Auth {
    username: string;
    password: string;
    email: string;
}

export interface Identity {
    identitytoken: string;
}