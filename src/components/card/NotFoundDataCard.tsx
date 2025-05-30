import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const NotFoundDataCard = ({
  title = "No data found",
  message,
  className,
}: {
  title?: string;
  message?: string;
  className?: string;
}) => {
  return (
    <Card className={cn("w-full  bg-white shadow-md", className)}>
      <CardHeader>
        <div className="flex items-center">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      </CardHeader>

      {message && (
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">{message}</p>
        </CardContent>
      )}
    </Card>
  );
};

export default NotFoundDataCard;
