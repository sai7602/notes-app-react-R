import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import { CancelTwoTone } from '@mui/icons-material';
import {
	Box,
	Grid,
	MenuItem,
	Popover,
	TextField,
	Modal,
	Typography,
	Button,
} from '@mui/material';
import categories from '../../../data/categoryList';
import { useDispatch, useSelector } from 'react-redux';
import { visuallyHiddenSelector } from '../../../store/selectors/visuallyHiddenSelector';
import { visibilityAddEditModal } from '../../../store/actions/visibilityAddEditModal';
import { Data } from '../../../types';
import getDate from '../../../utils/getDate';
import parseDate from '../../../utils/parseDate';
import { addNoteAction } from '../../../store/actions/addNoteAction';
import { editNoteAction } from '../../../store/actions/editNoteAction';

export default function AddEditModal() {
	const visuallyHidden = useSelector(visuallyHiddenSelector);
	const mode: string = useSelector(
		(state: any) => state.modalVisibility.mode
	);
	const noteId = useSelector((state: any) => state.modalVisibility.id);
	const editedNoteData: Data = useSelector((state: any): Data => {
		return state.notes.filter((note: Data) => note.id === noteId)[0];
	});

	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
		null
	);
	const [category, setCategory] = useState(
		mode === 'Add Note'
			? 'Task'
			: editedNoteData
			? editedNoteData.category
			: 'Task'
	);
	const [categoryContent, setCategoryContent] = useState(
		mode === 'Add Note' ? '' : editedNoteData ? editedNoteData.content : ''
	);
	const [noteName, setNoteName] = useState(
		mode === 'Add Note' ? '' : editedNoteData ? editedNoteData.name : ''
	);
	const [nameError, setNameError] = useState(false);
	const [categoryError, setCategoryError] = useState(false);
	const handleClose = () => dispatch(visibilityAddEditModal());
	const handleAddConfirm = (event: any) => {
		if (mode === 'Add Note') {
			const addData: Data = {
				content: categoryContent,
				id: faker.datatype.uuid(),
				createDate: getDate(),
				isArchived: false,
				modificationDate: parseDate(categoryContent),
				name: noteName,
				category,
			};
			if (!noteName) {
				setNameError(true);
				handleClickPopover(event);
			} else if (!categoryContent) {
				setCategoryError(true);
				handleClickPopover(event);
			} else {
				handleClose();
				dispatch(addNoteAction(addData));
			}
		}
		if (mode === 'Edit Note') {
			const editData: Data = {
				content: categoryContent,
				id: editedNoteData.id,
				createDate: editedNoteData.createDate,
				isArchived: false,
				modificationDate: parseDate(categoryContent),
				name: noteName,
				category,
			};
			if (!noteName) {
				setNameError(true);
				handleClickPopover(event);
			} else if (!categoryContent) {
				setCategoryError(true);
				handleClickPopover(event);
			} else {
				handleClose();
				dispatch(editNoteAction(editData));
			}
		}
	};
	const handleChangeCategory = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setCategory(event.target.value);
	};
	const handleChangeCategoryContent = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.value) {
			setCategoryError(false);
		} else {
			setCategoryError(true);
		}
		setCategoryContent(event.target.value);
	};
	const handleChangeCategoryName = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.value) {
			setNameError(false);
		} else {
			setNameError(true);
		}
		setNoteName(event.target.value);
	};

	const handleClickPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClosePopover = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<div>
			<Modal
				open={visuallyHidden.visibilityAddEditModal}
				sx={{ m: 1 }}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-25 p-2.5 shadow-md bg-gray-100 border-2  border-black">
					<Grid container spacing={2}>
						<Grid item={true} xs={11} justifyContent="center">
							<Typography
								id="modal-modal-title"
								variant="h4"
								align="center"
							>
								{mode}
							</Typography>
						</Grid>

						<Grid
							item={true}
							xs={1}
							style={{ paddingLeft: 0, cursor: 'pointer' }}
							color="#1976d2"
							onClick={handleClose}
						>
							<CancelTwoTone />
						</Grid>
					</Grid>

					<Box
						component="form"
						sx={{
							'& > :not(style)': { m: 2, width: '90%' },
						}}
						noValidate
						autoComplete="off"
						display={'flex'}
						flexDirection="column"
						alignItems={'center'}
					>
						<TextField
							error={nameError}
							id="outlined-basic"
							label="Note Name"
							variant="outlined"
							placeholder="Input Note Name"
							value={noteName}
							onChange={handleChangeCategoryName}
							required
						/>
						<TextField
							error={categoryError}
							id="outlined-textarea"
							label="Content"
							placeholder="Input Note Content"
							multiline
							value={categoryContent}
							onChange={handleChangeCategoryContent}
							required
						/>
						<TextField
							id="outlined-select-currency"
							select
							label="Select"
							value={category}
							onChange={handleChangeCategory}
							helperText="Please Select Category"
						>
							{categories.map((option) => (
								<MenuItem
									key={option.catId}
									value={option.catName}
								>
									{option.catName}
								</MenuItem>
							))}
						</TextField>

						<Grid
							container
							justifyContent={'center'}
							spacing={2}
							m={0}
						>
							<Grid item={true} xs={4}>
								<Button
									onClick={handleClose}
									variant="contained"
								>
									Cancel
								</Button>
							</Grid>
							<Grid item={true} xs={4}>
								<Button
									onClick={(event) => handleAddConfirm(event)}
									variant="contained"
								>
									Confirm
								</Button>
								<Popover
									id={id}
									open={open}
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'center',
									}}
									transformOrigin={{
										vertical: 'bottom',
										horizontal: 'center',
									}}
									onClose={handleClosePopover}
								>
									<Typography sx={{ p: 2 }}>
										Fill in all fields
									</Typography>
								</Popover>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
