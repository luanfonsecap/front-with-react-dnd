import React, { useState, useCallback } from 'react';
import produce from 'immer';
import { loadLists } from '../../services/api';

import List from '../List';

import BoardContxet from './context';
import { Container } from './styles';

const data = loadLists();

export default function Board() {
	const [lists, setLists] = useState(data);

	const move = useCallback((fromList, toList, from, to) => {
		setLists(produce(lists, draft => {
			const dragged = draft[fromList].cards[from];
			
			draft[fromList].cards.splice(from, 1);
			draft[toList].cards.splice(to, 0, dragged);
		}));
	}, [lists])
	
	return (
		<BoardContxet.Provider value={{ lists, move }}>
			<Container>
				{lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
			</Container>
		</BoardContxet.Provider>
	);
}
