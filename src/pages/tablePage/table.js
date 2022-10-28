import { Table } from "antd";
import React from "react";
import styled from "styled-components";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: "30%",
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: "40%",
  },
];
const data = [
  // {
  //   key: "1",
  //   name: "John Brown",
  //   age: 32,
  //   address: "New York No. 1 Lake Park",
  // },
  // {
  //   key: "2",
  //   name: "Jim Green",
  //   age: 42,
  //   address: "London No. 1 Lake Park",
  // },
  // {
  //   key: "3",
  //   name: "Joe Black",
  //   age: 32,
  //   address: "Sidney No. 1 Lake Park",
  // },
  // {
  //   key: "4",
  //   name: "Jim Red",
  //   age: 32,
  //   address: "London No. 2 Lake Park",
  // },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const Tablepage = () => {
  return (
    <CsTbl>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={false}
      />
    </CsTbl>
  );
};

export default Tablepage;
const CsTbl = styled.div`
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-top-left-radius: 20px;
  }
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-top-right-radius: 20px;
  }
  .ant-table-thead > tr > th {
    background: #c42c2c;
  }
  /* thead {
    background: red;
    border-radius: 20px;
  } */
  /* th {
    background: red;
  } */
`;
