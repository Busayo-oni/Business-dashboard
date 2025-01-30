import React from 'react';
import { AreaChart } from '@mantine/charts';

function BarTwo() {
    const data = [
        {
          date: 'Mar 22',
          Oranges: 2338,
          Tomatoes: 2452,
        },
        {
          date: 'Mar 23',
          Oranges: 2103,
          Tomatoes: 2402,
        },
        {
          date: 'Mar 24',
          Oranges: 986,
          Tomatoes: 1821,
        },
        {
          date: 'Mar 25',
          Oranges: 2108,
          Tomatoes: 2809,
        },
        {
          date: 'Mar 26',
          Oranges: 1726,
          Tomatoes: 2290,
        },
        {
          date: 'Mar 27',
          Oranges: 1943,
          Tomatoes: 2501,
        },
        {
          date: 'Mar 28',
          Oranges: 2215,
          Tomatoes: 2680,
        },
        {
          date: 'Mar 29',
          Oranges: 1890,
          Tomatoes: 2340,
        },
      ];
  return (
    <AreaChart
      h={150}
      data={data}
      dataKey="date"
      series={[
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
      curveType="bump"
      withXAxis={false}
      withYAxis={false}
      gridAxis="none"
    />
  );
}
export default BarTwo