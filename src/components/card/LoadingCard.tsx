import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const LoadingCard = ({
  title = "Loading...",
  message = "Please wait while we fetch your data",
  className,
}: {
  title?: string;
  message?: string;
  className?: string;
}) => {
  return (
    <Card className={cn("w-full  bg-white shadow-md", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{message}</p>
      </CardContent>
    </Card>
  );
};

export default LoadingCard;
