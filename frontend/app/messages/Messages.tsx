'use client';

import { CreateMessageForm } from '@/features/MessageCreate';
import { MessagesTable } from '@/widgets/Table';

export const Messages = () => {
	return (
		<main className='p-6 space-y-6 max-w-2xl mx-auto'>
			<h1 className='text-2xl font-semibold'>Messages</h1>
			<CreateMessageForm />
			<MessagesTable />
		</main>
	);
};
