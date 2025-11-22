import React from 'react';

const Loding = () => {
 return (
   <div className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-50">
     <div className="animate-spin h-16 w-16 border-4 border-purple-500 border-t-transparent rounded-full"></div>
     <p className="text-white text-xl mt-4">Loading...</p>
   </div>
 );
};

export default Loding;