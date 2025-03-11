import React from "react";
import { Loader } from 'lucide-react';


const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin size-24" />
    </div>
  )
  };


export default Loading;
