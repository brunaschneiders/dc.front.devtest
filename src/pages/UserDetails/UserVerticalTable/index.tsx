import React from 'react';

import { VerticalTable } from '../../../components';
import { UserProps } from '..';

import { getFormattedAddress } from '../../../utils/formatter';

interface UserVerticalTableProps {
  data: UserProps;
}

export const UserVerticalTable = ({
  data
}: UserVerticalTableProps): JSX.Element => {
  const { name, username, email, phone, website, address, company } = data;
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
