'use client';
import React from 'react';
import { MessageSchema } from '../../model/types/messages';

interface MessageItemProps {
	message: MessageSchema;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
	return (
		<li className={'flex justify-between items-center border-b py-2'}>
			<span>{message.text}</span>
			<small className='text-gray-500'>
				{new Date(message.createdAt).toLocaleString()}
			</small>
		</li>
	);
};
