import numeral from "numeral";
import { Chart } from "./mixchart.style";

const MixedChart = ({ data, xaxis, height }) => {
  //   const checkIsNull = (currentValue) => currentValue === null;
  //   const datas = data[2]?.data;
  //   const dataCheck = datas?.every(checkIsNull);

  //   if (dataCheck) {
  //     data?.map((value) => value?.data?.pop());
  //     data?.splice(2, 1);
  //   }

  const percents = data[3] ? data[3]?.percent : data[2]?.percent;
  const dataCheck = false;

  const series = data || [];

  const options = {
    grid: {
      padding: {
        top: -14,
        bottom: -8,
        left: 9,
        right: 0,
      },
    },
    chart: {
      width: 200,
      height: 350,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [2],
    },
    colors: dataCheck
      ? ["#4786FF", "#FFA336", "#5D38FA"]
      : ["#4786FF", "#FFA336", "#23146C", "#5D38FA"],
    stroke: {
      width: dataCheck ? [1, 1, 2] : [1, 1, 1, 2],
    },
    markers: {
      size: 6,
      strokeColors: "#EFEBFF",
      strokeWidth: 2,
      shape: "circle",
      radius: 2,
      showNullDataPoints: false,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    yaxis: {
      tickAmount: 2,
      labels: {
        style: {
          colors: "#B1B1B1",
          fontSize: "12px",
          fontFamily: "Prompt",
          fontWeight: 400,
        },
        formatter: (value) => {
          const num = value >= 1000 ? value / 1000 : value;
          return value < 1000 ? `${num}` : `${Math.floor(num * 10) / 10}K`;
        },
      },
    },
    xaxis: {
      categories: xaxis || [
        "<= 25",
        "26-34",
        "35-44",
        "45-54",
        "55-64",
        ">= 65",
        "ไม่ระบุอายุ",
        ["ไม่ระบุเพศ", "และอายุ"],
      ],
      labels: {
        show: true,
        style: {
          colors: "#B1B1B1",
          fontSize: "12px",
          fontFamily: "Prompt",
          fontWeight: 400,
        },
        offsetY: -4,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: true,
      followCursor: false,
      custom: function ({ series, dataPointIndex, w }) {
        const seriesCheck = series[3] ? series[3] : series[2];

        return `<div class="tooltip-dashboard">
                  <div class='top-row'>
                        ช่วงอายุ ${w.globals.categoryLabels[dataPointIndex]} ปี
                  </div>
                  <div class='row-dot'>
                      <div class='dot total'></div>
                      <p> จำนวนรวมทั้งหมด : </p> <b> ${numeral(
                        seriesCheck[dataPointIndex]
                      ).format(0, 0)} </b> 
                
                  </div>
                  <div class='row-dot'>
                      <div class='dot men'></div>
                      <p> ชาย : </p> <b>${numeral(
                        series[0][dataPointIndex]
                      ).format(0, 0)} </b>
                  </div>
                  <div class='row-dot'>
                      <div class='dot women'></div>
                      <p> หญิง : </p><b> ${numeral(
                        series[1][dataPointIndex]
                      ).format(0, 0)} </b>
                  </div>
                </div>`;
      },
    },
    legend: {
      show: true,
      fontSize: "12px",
      fontFamily: "Prompt",
      fontWeight: 400,
      position: "top",
      horizontalAlign: "left",
      offsetY: 0,
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      markers: {
        offsetY: 2,
      },
      onItemClick: {
        toggleDataSeries: false,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
    },
  };
  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={height || "200px"}
    />
  );
};

export default MixedChart;
