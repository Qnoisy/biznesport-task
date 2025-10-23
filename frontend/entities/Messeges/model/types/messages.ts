export interface MessageSchema {
	id: number;
	text: string;
	createdAt: string;
	updatedAt: string;
}
export interface CreateMessageText {
	text: string;
}
export type ApiListResponse<T> = { success: boolean; data: T[] };
export type ApiItemResponse<T> = { success: boolean; data: T };
