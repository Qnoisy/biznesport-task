import { baseApi } from '@/shared/api/baseApi';
import type {
	ApiItemResponse,
	ApiListResponse,
	CreateMessageText,
	MessageSchema,
} from '../types/messages';

export const messageApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getMessages: build.query<MessageSchema[], void>({
			query: () => '/api/messages',
			transformResponse: (response: ApiListResponse<MessageSchema>) =>
				response.data,
			providesTags: ['Message'],
		}),
		createMessage: build.mutation<MessageSchema, CreateMessageText>({
			query: body => ({
				url: '/api/messages',
				method: 'POST',
				body,
			}),
			transformResponse: (response: ApiItemResponse<MessageSchema>) =>
				response.data,
			invalidatesTags: ['Message'],
		}),
		updateMessage: build.mutation<MessageSchema, { id: number; text: string }>({
			query: ({ id, ...body }) => ({
				url: `/api/messages/${id}`,
				method: 'PUT',
				body,
			}),
			transformResponse: (response: ApiItemResponse<MessageSchema>) =>
				response.data,
			invalidatesTags: ['Message'],
		}),
		deleteMessage: build.mutation<{ success: boolean }, number>({
			query: id => ({
				url: `/api/messages/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Message'],
		}),
	}),
});

export const {
	useCreateMessageMutation,
	useDeleteMessageMutation,
	useGetMessagesQuery,
	useUpdateMessageMutation,
} = messageApi;
