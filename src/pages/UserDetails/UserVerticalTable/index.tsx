import React from 'react';

import { VerticalTable } from '../../../components';

import { useUsers } from '../../../hooks';

import { getFormattedAddress } from '../../../utils/formatter';

export const UserVerticalTable = (): JSX.Element => {
  const { activeUser } = useUsers();

  const { name, username, email, phone, website, address, company } =
    activeUser;
  const tableData = [
    { header: 'Nome Completo', value: name },
    { header: 'Username', value: username },
    { header: 'E-mail', value: email },
    { header: 'Telefone', value: phone },
    { header: 'Website', value: website },
    {
      header: 'Endereço',
      value: getFormattedAddress(address?.street, address?.suite, address?.city)
    },
    { header: 'Empresa', value: company?.name }
  ];

  return <VerticalTable data={tableData} />;
};
