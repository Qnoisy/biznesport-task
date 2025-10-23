'use client';
import React from 'react';
import { useGetMessagesQuery } from '../../model/api/messagesApi';
import { MessageItem } from '../MessageItem/MessageItem';

export const MessageList: React.FC = () => {
	const { data, isLoading } = useGetMessagesQuery();

	if (isLoading) return <p>Loading...</p>;

	return (
		<ul className='space-y-2'>
			{data?.map(message => (
				<MessageItem key={message.id} message={message} />
			))}
		</ul>
	);
};
