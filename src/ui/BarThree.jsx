import React from "react";
import { BarChart } from '@mantine/charts';

function BarThree() {
    const data = [
        { month: 'Jan', Smartphones: 1200, Laptops: 900 },
        { month: 'Feb', Smartphones: 1900, Laptops: 1200 },
        { month: 'Mar', Smartphones: 400, Laptops: 1000 },
        { month: 'Apr', Smartphones: 1000, Laptops: 200 },
        { month: 'May', Smartphones: 800, Laptops: 1400 },
        { month: 'June', Smartphones: 750, Laptops: 600 },
        { month: 'July', Smartphones: 950, Laptops: 800 },      ];
  return (
    <BarChart
      h={130}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'gold' },
      ]}
      tickLine="y"
      gridAxis="none"
      withYAxis={false}
    />
  );
}
export default BarThree