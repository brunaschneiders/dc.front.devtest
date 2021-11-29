import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { UsersList } from '.';
import { useUsers } from '../../hooks';

const mockedUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    },
    albumsQty: 10
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618'
      }
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    },
    albumsQty: 10
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653'
      }
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications'
    },
    albumsQty: 10
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990'
      }
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services'
    },
    albumsQty: 10
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342'
      }
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
    },
    albumsQty: 10
  }
];

jest.mock('react-router-dom', () => {
  return {
    useHistory() {
      return jest.fn();
    }
  };
});

jest.mock('../../hooks', () => {
  return {
    useUsers() {
      return { requestUsersList: jest.fn(), filteredUsers: mockedUsers };
    }
  };
});

describe('Users Table component', () => {
  it('filter users by name in table when entering text in search input', () => {
    const { getAllByText, getByPlaceholderText } = render(<UsersList />);

    const { filteredUsers, onChangeQueryUser } = useUsers();

    const userNameToSearch = filteredUsers[2].name;
    const userNameToDontFind = filteredUsers[3].name;

    const onChangeQueryUserMocked = mocked(onChangeQueryUser);

    const searchInputElement = getByPlaceholderText('Buscar usuários');
    fireEvent.change(searchInputElement, () =>
      onChangeQueryUserMocked(userNameToSearch)
    );

    const elementsWithUserNameToSearched = getAllByText(userNameToSearch);
    expect(elementsWithUserNameToSearched).toHaveLength(1);

    const elementsWithUserNameToDontFind = getAllByText(userNameToDontFind);
    expect(elementsWithUserNameToDontFind).toHaveLength(0);
  });
});
