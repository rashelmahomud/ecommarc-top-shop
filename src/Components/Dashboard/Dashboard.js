import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  
    const data = [
        
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
        ];
    
    return (
        <div className='chart'>
           <div className='bar-chart'>
                <h1>INVESMENT VS REVINUE</h1>

                <BarChart width={750} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={'month'}></XAxis>
                <YAxis />
                <Legend />
                <Bar dataKey={"revenue"} fill="#82ca9d"></Bar>
                <Bar dataKey={"investment"} fill="#8884d8"></Bar>
                <Bar dataKey={"sell"} fill="#8888"></Bar>
                <Tooltip />
  

                </BarChart>
           </div>
           <div className='paiChart'>
               <h1>INVESMENT VS REVINUE</h1>

               <PieChart width={730} height={250}>
               <Tooltip />
               <Legend />
                   <Pie data={data} dataKey={'month'} ></Pie>
                   <Pie data={data} dataKey="revenue"  outerRadius={80} fill="#8884d8" />
                   <Pie data={data} dataKey="investment" outerRadius={100} fill="#82ca9d" label />
                   <Pie data={data} dataKey={'sell'}></Pie>
                   
               </PieChart>

           </div>


            
        </div>
    );
};

export default Dashboard;







