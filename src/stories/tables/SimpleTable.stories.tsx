import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SimpleTable, ColumnDefinitionType } from '../../components';

type DataProps = {
  column1: string;
  column2: string;
  column3: string;
};

const tableData: DataProps[] = [
  {
    column1: 'Coluna 1 - Linha 1',
    column2: 'Coluna 2 - Linha 1',
    column3: 'Coluna 3 - Linha 1'
  },
  {
    column1: 'Coluna 1 - Linha 2',
    column2: 'Coluna 2 - Linha 2',
    column3: 'Coluna 3 - Linha 2'
  },
  {
    column1: 'Coluna 1 - Linha 3',
    column2: 'Coluna 2 - Linha 3',
    column3: 'Coluna 3 - Linha 3'
  }
];

const tableColumns: ColumnDefinitionType<DataProps, keyof DataProps>[] = [
  {
    key: 'column1',
    header: 'Coluna 1'
  },
  {
    key: 'column2',
    header: 'Coluna 2'
  },
  {
    key: 'column3',
    header: 'Coluna 3'
  }
];

export default {
  title: 'Tables/Simple Table',
  component: SimpleTable,
  args: {
    data: tableData,
    columns: tableColumns as ColumnDefinitionType<unknown, never>[]
  }
} as ComponentMeta<typeof SimpleTable>;

const Template: ComponentStory<typeof SimpleTable> = (args) => (
  <SimpleTable {...args} />
);

export const Default = Template.bind({});
