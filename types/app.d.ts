declare const _brand: unique symbol;

declare global {
  /**
   * Custom utility types
   */
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;

  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type Indexed<K = string, T = unknown> = { [key: K]: T };

  export type Brand<K, T> = K & { [_brand]: T };

  /**
   * Type aliases
   */

  export type NoteId = string;

  export type Url = string;
}

export {};
