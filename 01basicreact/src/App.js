 function App(){
  const username="codeplanner"
  return(
    <>
    <tech/>
    <h1>Welcome to tech stack </h1>
<p>test para</p>
</>
 );


 }
  export default App;
// const SimpleDateAccordion = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [year, setYear] = useState("");
//   const [month, setMonth] = useState("");
//   const [date, setDate] = useState("");
//   const [days, setDays] = useState([]);

//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: currentYear - 2000 + 1 }, (_, i) => 2000 + i);
//   // const months = Array.from({ length: 12 }, (_, i) => i + 1);

//    const monthNames = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
//   ];


//   // Update days when year or month changes
//   useEffect(() => {
//     if (year && month) {
//       const numDays = new Date(year, month, 0).getDate(); // Get correct days
//       setDays(Array.from({ length: numDays }, (_, i) => i + 1));
//     } else {
//       setDays([]);
//     }
//   }, [year, month]);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Hide Date Picker" : "Show Date Picker"}
//       </button>

//       {isOpen && (
//         <div style ={{display: "flex", gap: "10px", alignItems: "center"}}>
//           <br />
//           <label >
//             Year:
//             <select value={year} onChange={(e) => setYear(e.target.value)}>
//               <option value="">Select Year</option>
//               {years.map((y) => (
//                 <option key={y} value={y}>{y}</option>
//               ))}
//             </select>
//           </label>

//           <br /><br />
//            <select value={month} onChange={(e) => setMonth(e.target.value)}>
//             <option value="">Select Month</option>
//             {monthNames.map((name, index) => (
//               <option key={index} value={index + 1}>{name}</option>
//             ))}
//           </select>
// {/* 
//           <label>
//             Month:
//             <select value={month} onChange={(e) => setMonth(e.target.value)}>
//               <option value="">Select Month</option>
//               {months.map((m) => (
//                 <option key={m} value={m}>{m}</option>
//               ))}
//             </select>
//           </label> */}

//           <br /><br />

//           <label>
//             Date:
//             <select value={date} onChange={(e) => setDate(e.target.value)}>
//               <option value="">Select Date</option>
//               {days.map((d) => (
//                 <option key={d} value={d}>{d}</option>
//               ))}
//             </select>
//           </label>
//           <br /><br />
//          </div>
//       )}
//       {year && month && date && (
//             <p>
//               Selected Date: {year}-{month}-{date}
//             </p>
//           )}
//     </div>
//   );
// };

// export default SimpleDateAccordion;

reactElement