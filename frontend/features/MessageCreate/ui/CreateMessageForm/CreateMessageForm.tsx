'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCreateMessageMutation } from '@/entities/Messeges';
import { useState } from 'react';
import { toast } from 'sonner';

export const CreateMessageForm: React.FC = () => {
	const [text, setText] = useState('');
	const [create, { isLoading }] = useCreateMessageMutation();

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const value = text.trim();
		if (!value) return;
		try {
			await create({ text: value }).unwrap();
			setText('');
			toast.success('Message created');
		} catch (e) {
			const err = e as Error;
			toast.error('Failed to create', {
				description: err.message || 'Unknown error',
			});
		}
	};

	return (
		<form onSubmit={onSubmit} className='flex gap-2'>
			<Input
				value={text}
				onChange={e => setText(e.target.value)}
				placeholder='Type message...'
			/>
			<Button type='submit' disabled={isLoading}>
				Add
			</Button>
		</form>
	);
};
