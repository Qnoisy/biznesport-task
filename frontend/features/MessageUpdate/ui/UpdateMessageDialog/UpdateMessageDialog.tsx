'use client';

import { Button } from '@/components/ui/button';
import { DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useUpdateMessageMutation } from '@/entities/Messeges';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';

import { useState } from 'react';
import { toast } from 'sonner';

interface UpdateMessageDialogProps {
	id: number;
	initial: string;
}

export const UpdateMessageDialog: React.FC<UpdateMessageDialogProps> = ({
	id,
	initial,
}) => {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState(initial);
	const [update, { isLoading }] = useUpdateMessageMutation();

	const onSave = async () => {
		try {
			await update({ id, text }).unwrap();
			toast.success('Updated');
			setOpen(false);
		} catch {
			toast.error('Update failed');
		}
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<Button onClick={() => setOpen(true)} variant='secondary'>
				Edit
			</Button>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit message</DialogTitle>
				</DialogHeader>
				<Input value={text} onChange={e => setText(e.target.value)} />
				<DialogFooter>
					<Button onClick={onSave} disabled={isLoading}>
						Save
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
