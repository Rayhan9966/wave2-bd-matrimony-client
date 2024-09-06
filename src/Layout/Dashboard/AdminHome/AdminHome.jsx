import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaSackDollar, FaUsersViewfinder } from "react-icons/fa6";
import { FaDatabase, FaUsers } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const AdminHome = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    // const{users,biodata ,view,revenue}=data;


    const {data : stats={} }= useQuery({
        
        queryKey:['admin-stats'],
        queryFn: async () => {
            
     const res= await axiosSecure.get('/admin-stats');
     return res.data;
        }

    });
console.log(stats);
console.log(typeof stats.revenue);

const data = [
  // {
  //   name: 'Revenue',
  //   uv: stats?.revenue,
  //   pv: 2400,
  //   amt: 2400,
  // },

  {
    name: 'Biodata ',
    uv: stats?.biodata,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'View',
    uv: stats?.view,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'User',
    uv: stats?.users,
    pv: 4800,
    amt: 2181,
  }

];
//pi data chart
// const data1 = [
//   { name: 'Biodata', value: 5225 },
//   { name: 'Users', value: 250},
//   { name: 'View', value: 500},
//   { name: 'Revenue', value:600 },
// ];

    // const { data: chartData = [] } = useQuery({
    //     queryKey: ['admin-stats'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/biodata1');
    //         return res.data;
    //     }
    // })


    //custom bar chart

    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    
// pi chart 



    return (
    <div>
            <h2 className="text-3xl">
            <span>Hi....! Welcome </span>
       {
        user?.displayName? user.displayName: 'Back'
       } 
       </h2>

       <section className="p-6 my-6 mt-10 ml-20 dark:bg-gray-100 dark:text-gray-800">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  dark:bg-violet-400">
				<FaSackDollar className="text-5xl"></FaSackDollar>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-bold leading-none">{stats?.revenue}$</p>
				<p className="capitalize">Revenue</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
			<FaUsers className="text-5xl"></FaUsers>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-bold leading-none">{stats?.users}</p>
				<p className="capitalize">Users</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  dark:bg-violet-400">
            <FaDatabase className="text-5xl"></FaDatabase>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-bold leading-none">{stats?.biodata}</p>
				<p className="capitalize">Biodata</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  dark:bg-violet-400">
            <FaUsersViewfinder className="text-5xl"></FaUsersViewfinder>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-bold leading-none">{stats?.view}</p>
				<p className="capitalize">Total View</p>
			</div>
		</div>
	</div>
</section>

<div className="flex">
<div>
<BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
</div>
{/* <div>
<PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data1}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data1}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
</div> */}
</div>
    </div>
    );
};

export default AdminHome;