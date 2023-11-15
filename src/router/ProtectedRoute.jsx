// import { useEffect, useState } from "react";
// import authService from "../services/auth_service";

// const ProtectedRoute = ({ children }) => {
//   const [showProtection, setShowProtection] = useState(false);
//   useEffect(() => {
//     const user = authService.getCurrentUser();
//     if(user){
//         setShowProtection(true)
//     }
//   }, []);
//   return <div>{showProtection&& children}</div>;
// };

// export default ProtectedRoute;
