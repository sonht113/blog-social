import { Key, memo, useEffect, useMemo } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space, Table, TableProps } from 'antd';
import { ColumnType } from 'antd/es/table';
import { FilterConfirmProps } from 'antd/es/table/interface';

import { CustomColumnsType } from '@/ts/types';

type CustomTableProps<T extends object> = TableProps<T> & {
  name?: string;
  scrollX?: number;
  isLoading?: boolean;
  handleSearch: (
    v: unknown,
    selectedKeys: unknown[],
    confirm: (param?: FilterConfirmProps) => void,
    close: () => void,
  ) => void;
  handleReset: (
    v: () => void,
    key: unknown,
    confirm: (param?: FilterConfirmProps) => void,
    close: () => void,
  ) => void;
  columns: CustomColumnsType<T>;
};

const CustomTable = <T extends object>({
  rowKey = 'id',
  dataSource = [],
  columns = [],
  name,
  handleSearch,
  handleReset,
  isLoading,
  pagination,
  scrollX = 1200,
  onChange,
  ...props
}: CustomTableProps<T>) => {
  const getColumnSearchProps = (
    dataIndex: unknown,
    type: 'input' | 'select' | 'input-number',
    options?:
      | {
          value: number;
          label: string;
        }[]
      | undefined,
    initValue?: string[],
  ): ColumnType<T> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => {
      return (
        <FilterDropdown
          type={type}
          options={options}
          initValue={initValue}
          dataIndex={dataIndex}
          selectedKeys={selectedKeys}
          setSelectedKeys={setSelectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          close={close}
          handleReset={handleReset}
          handleSearch={handleSearch}
        />
      );
    },
    filterIcon: (
      <SearchOutlined
        style={{
          color: initValue && initValue.length !== 0 ? '#1677ff' : '#939393',
        }}
      />
    ),
  });

  const newColumns = useMemo(() => {
    const arr = [];
    for (const col of columns) {
      (col.type === 'input' || col.type === 'input-number') &&
        arr.push({
          ...col,
          ...getColumnSearchProps(col['key'], col.type, [], col.initValue),
        });
      col.type === 'select' &&
        arr.push({
          ...col,
          ...getColumnSearchProps(
            col['key'],
            col.type,
            col.options,
            col.initValue,
          ),
        });
      !col.type && arr.push({ ...col });
    }
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns]);

  return (
    <Table
      rowKey={rowKey}
      size="large"
      dataSource={dataSource}
      columns={newColumns}
      onChange={onChange}
      pagination={{
        position: ['bottomRight'],
        showSizeChanger: false,
        showLessItems: true,
        showTotal: (total, range) =>
          `${total}${name ? ' '.concat(name) : ''} | Từ ${range[0]} đến ${
            range[1]
          }`,
        ...pagination,
      }}
      scroll={{ x: scrollX }}
      loading={isLoading}
      {...props}
    />
  );
};

type FilterProps = {
  handleSearch: (
    v: unknown,
    selectedKeys: unknown[],
    confirm: (param?: FilterConfirmProps) => void,
    close: () => void,
  ) => void;
  handleReset: (
    v: () => void,
    key: unknown,
    confirm: (param?: FilterConfirmProps) => void,
    close: () => void,
  ) => void;
  dataIndex: unknown;
  type: 'input' | 'select' | 'input-number';
  options?:
    | {
        value: number;
        label: string;
      }[]
    | undefined;
  initValue?: string[] | string | number;
  clearFilters: (() => void) | undefined;
  close: () => void;
  setSelectedKeys: (selectedKeys: Key[]) => void;
  selectedKeys: Key[];
  confirm: (param?: FilterConfirmProps | undefined) => void;
};

const FilterDropdown = ({
  handleSearch,
  dataIndex,
  handleReset,
  initValue,
  options,
  selectedKeys,
  setSelectedKeys,
  clearFilters,
  confirm,
  type,
}: FilterProps) => {
  useEffect(() => {
    if (type === 'input' || type === 'select' || type === 'input-number') {
      typeof initValue === 'object' && setSelectedKeys(initValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initValue, type]);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="flex flex-col p-4" onClick={(e) => e.stopPropagation()}>
      <Space className="mb-3 ml-auto">
        <Button
          type="primary"
          onClick={() => handleSearch(dataIndex, selectedKeys, confirm, close)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
          className="text-black"
        >
          Search
        </Button>
        <Button
          disabled={selectedKeys.length === 0}
          type="default"
          className="!bg-gray-300"
          onClick={() => {
            if (clearFilters) {
              handleReset(clearFilters, dataIndex, confirm, close);
            }
            if (type === 'input' || type === 'select') {
              setSelectedKeys([]);
            }
          }}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </Space>
      {(type === 'input' || type === 'input-number') && (
        <Input
          type={type === 'input-number' ? 'number' : 'text'}
          placeholder={`Search ${String(dataIndex)}`}
          value={
            selectedKeys.length > 0 ? selectedKeys[0] : [String(initValue)]
          }
          onPressEnter={() =>
            handleSearch(dataIndex, selectedKeys, confirm, close)
          }
          onChange={(e) => setSelectedKeys([e.target.value])}
          className="mb-4 block"
        />
      )}
      {type === 'select' && options && (
        <Select
          placeholder={`Search ${String(dataIndex)}`}
          value={
            selectedKeys.length !== 0
              ? Number(selectedKeys[0])
              : selectedKeys[0]
          }
          onSelect={(value) => setSelectedKeys([value])}
          className="mb-4 block"
          options={options}
        />
      )}
    </div>
  );
};

export default memo(CustomTable) as typeof CustomTable;
