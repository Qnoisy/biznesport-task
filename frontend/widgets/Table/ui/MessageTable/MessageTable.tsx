'use client';

import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {
	useDeleteMessageMutation,
	useGetMessagesQuery,
} from '@/entities/Messeges';
import { UpdateMessageDialog } from '@/features/MessageUpdate';

import { toast } from 'sonner';

export const MessagesTable: React.FC = () => {
	const { data = [], isLoading } = useGetMessagesQuery();
	const [del, { isLoading: removing }] = useDeleteMessageMutation();

	if (isLoading) return <div className='opacity-70'>Loading…</div>;

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>ID</TableHead>
					<TableHead>Text</TableHead>
					<TableHead className='text-right'>Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map(m => (
					<TableRow key={m.id}>
						<TableCell>{m.id}</TableCell>
						<TableCell>{m.text}</TableCell>
						<TableCell className='text-right space-x-2'>
							<UpdateMessageDialog id={m.id} initial={m.text} />
							<Button
								variant='destructive'
								disabled={removing}
								onClick={async () => {
									try {
										await del(m.id).unwrap();
										toast.success('Deleted');
									} catch {
										toast.error('Delete failed');
									}
								}}
							>
								Delete
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
