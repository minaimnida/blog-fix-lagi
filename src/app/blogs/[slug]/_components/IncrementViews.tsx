"use client";

import { axiosInstance } from "@/lib/axios";
import { FC, useEffect } from "react";

interface IncrementViewsProps {
  objectId: string;
  views: number;
}

const IncrementViews: FC<IncrementViewsProps> = ({ objectId, views }) => {

    
  const incrementViews = async () => {
    try {
      await axiosInstance.put(`/data/blogs/${objectId}`, {
        views: views + 1,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    incrementViews();
  }, []);
  return <div />;
};

export default IncrementViews;
