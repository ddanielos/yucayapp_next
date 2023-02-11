
// const useCreateSubscriber = (API) => {
//   const [ status, setStatus ] = useState({
//     loading: false,
//     success: false,
//     error: null
//   });

//   const createSubscriber = async(name, email) => {
//     setStatus({...status, loading: true});

//     try {
//       const response = await fetch(API,{
//         method: 'POST',
//         headers: {
//           'content-type': 'application/json',
//         },
//         body: JSON.stringify({
//           data: {
//             name,
//             email,
//           },
//         }),
//       });
//       const data = await response.json();
//       if (!response.ok){
//         throw new Error(data.message);
//       }
//       setStatus({...status, loading: false, success: true});
//     } catch (error){
//       setStatus({...status, loading: false, error})
//     }
//   };

//   return [status, createSubscriber];
// };

// export default useCreateSubscriber;