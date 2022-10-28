import moment from "moment";
import numeral from "numeral";

const columnWidth = 100;
const unixToDate = (date) => {
  return moment.unix(date).locale("en-bd").format("DD/MM/BBBB");
};

export const treeData = (nationality) => [
  {
    title: "ทั้งหมด",
    value: "all",
    key: "0-0",
    children: nationality || [],
  },
  {
    title: "ไม่ระบุสัญชาติ",
    value: "ไม่ระบุสัญชาติ",
    key: "0-1",
  },
];

export const defaultData = {
  start_at: 1659638184,
  end_at: 1659674184,
  updated_at: 1659674184,
  dashboard_data: {
    summary_tourists: 0,
    gender_summary_data: {
      total_female: 58126,
      percent_female: 46.51, //(total_f/total_tourists)*100
      total_male: 103874,

      percent_male: 83.11,
      // total_agender: 230,
      total_agender: 0,

      percent_agender: 2.0,
    },
    age_summary_data: [
      {
        age_range: "<= 25",
        total_age: 300,
        percent_age_range: 0.24, //(total_age/total_tourists)*100
        total_tourists_gender: 5200,
        percent_tourists_gender: 7,
        amount_female: 2700,
        amount_mele: 2500,
        amount_agender: 0,
      },
      {
        age_range: "26-34",
        total_age: 300,
        percent_age_range: 50,
        total_tourists_gender: 11000,
        percent_tourists_gender: 15,
        amount_female: 6000,
        amount_mele: 5000,
        amount_agender: 0,
      },
      {
        age_range: "35-44",
        total_age: 300,
        percent_age_range: 50,
        total_tourists_gender: 15500,
        percent_tourists_gender: 21.63,
        amount_female: 8500,
        amount_mele: 7000,
        amount_agender: 0,
      },
      {
        age_range: "45-54",
        total_age: 300,
        percent_age_range: 50,
        total_tourists_gender: 9500,
        percent_tourists_gender: 13.1,
        amount_female: 5000,
        amount_mele: 4500,
        amount_agender: 0,
      },
      {
        age_range: "55-64",
        total_age: 300,
        percent_age_range: 50,
        total_tourists_gender: 7000,
        percent_tourists_gender: 9.13,
        amount_female: 3000,
        amount_mele: 4000,
        amount_agender: 0,
      },
      {
        age_range: ">= 65",
        total_age: 300,
        percent_age_range: 50,
        total_tourists_gender: 11500,
        percent_tourists_gender: 15.44,
        amount_female: 6500,
        amount_mele: 5000,
        amount_agender: 0,
      },
      {
        age_range: "na_age",
        total_age: 300,
        percent_age_range: 0.24,
        total_tourists_gender: 6600,
        percent_tourists_gender: 9.56,
        amount_female: 3600,
        amount_mele: 3000,
        amount_agender: 0,
      },
      {
        age_range: "na_age_gender",
        total_age: 300,
        percent_age_range: 0.24,
        total_tourists_gender: 8000,
        percent_tourists_gender: 11.78,
        amount_female: 0,
        amount_mele: 0,
        amount_agender: 8000,
      },
    ],
    list_data: [
      {
        nationality_th_name: "some_natiolity1_name",
        total_tourists: 2500,
        gender_data: [
          {
            gender: "F",
            age_data: [
              {
                span_age: "25-35",
                total_age: 150,
              },
              {
                span_age: "35-44",
                total_age: 0,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
          {
            gender: "M",
            age_data: [
              {
                span_age: "25-35",
                total_age: 150,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
          {
            gender: "A",
            age_data: [
              {
                span_age: "25-35",
                total_age: 150,
              },
              {
                span_age: "35-44",
                total_age: 0,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
        ],
      },
      {
        nationality_th_name: "some_natiolity2_name",
        total_tourists: 3000,
        gender_data: [
          {
            gender: "F",
            age_data: [
              {
                span_age: "25-34",
                total_age: 150,
              },
              {
                span_age: "35-44",
                total_age: 0,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
          {
            gender: "M",
            age_data: [
              {
                span_age: "25-35",
                total_age: 150,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
          {
            gender: "A",
            age_data: [
              {
                span_age: "25-35",
                total_age: 150,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
        ],
      },
    ],
  },
};

export const columns = [
  {
    title: "สัญชาติ",
    dataIndex: "nationality_th_name",
    key: "nationality_th_name",
    // width: 50,
    className: "dashboard",
    render: (data) => <div className="data-left">{data}</div>,
  },
  {
    title: "เพศ",
    dataIndex: "gender",
    key: "gender",
    // width: 50,
    className: "dashboard",
    render: (data) => (
      <div className="data-left">
        {data === "F" ? "หญิง" : data === "M" ? "ชาย" : "ไม่ระบุเพศ"}{" "}
      </div>
    ),
  },
  {
    title: "ช่วงอายุ",
    dataIndex: "span_age",
    key: "span_age",
    // width: 50,
    className: "dashboard",
    render: (data) =>
      data?.map((item, index) => (
        <div style={{ padding: "8px 0px" }} key={index}>
          {item === "<25"
            ? "ต่ำกว่า 25 ปี"
            : item === "65-N"
            ? "65 ปีขึ้นไป"
            : item === "na_age"
            ? "ไม่ระบุอายุ"
            : item === "na_age_agender"
            ? ""
            : `${item} ปี`}
          <br />
        </div>
      )),
  },
  {
    title: "จำนวนรวม",
    dataIndex: "total_age",
    key: "total_age",
    width: 250,
    className: "dashboard",
    render: (data) =>
      data?.map((item, index) => (
        <div style={{ height: "auto", padding: "8px 0px" }} key={index}>
          {numeral(item).format("0,0")} <br />
        </div>
      )),
  },
];

export const dataSouce = [
  {
    nationality: "เยอรมัน",
    gender: "ชาย",
    range_age: [
      "ต่ำกว่า 25 ปี",
      "25 - 34 ปี",
      "35 - 44 ปี",
      "45 - 54 ปี",
      "55 - 64 ปี",
      "65 ปีขึ้นไป",
      "ไม่ระบุอายุ",
    ],
    amount: [421, 321, 311, 212, 167, 143, 98],
  },
  {
    nationality: "",
    gender: "หญิง",
    range_age: [
      "ต่ำกว่า 25 ปี",
      "25 - 34 ปี",
      "35 - 44 ปี",
      "45 - 54 ปี",
      "55 - 64 ปี",
      "65 ปีขึ้นไป",
      "ไม่ระบุอายุ",
    ],
    amount: [421, 321, 311, 212, 167, 143, 98],
  },
  {
    nationality: "",
    gender: "ไม่ระบุเพศ",
    range_age: [
      "ต่ำกว่า 25 ปี",
      "25 - 34 ปี",
      "35 - 44 ปี",
      "45 - 54 ปี",
      "55 - 64 ปี",
      "65 ปีขึ้นไป",
      "ไม่ระบุอายุ",
    ],
    amount: [421, 321, 311, 212, 167, 143, 98],
  },
];
