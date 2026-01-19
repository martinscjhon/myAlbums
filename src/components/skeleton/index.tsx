import { Skeleton } from "@mui/material";
import type { FC } from "react";
import type { ISkeletonProps } from "src/@types/@components/skeleton";
import { SkeletonContainer, SkeletonItem } from "./styles";

export const SkeletonComponent: FC<ISkeletonProps> = ({
  itemCount = 4,
  showImage = true,
}) => {
  return (
    <SkeletonContainer>
      {Array.from({ length: itemCount }).map((_, index) => (
        <SkeletonItem key={index}>
          {showImage && (
            <Skeleton
              variant="rectangular"
              height={160}
              sx={{ mb: 1, borderRadius: "8px" }}
            />
          )}
          <Skeleton variant="text" width="80%" height={30} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="100%" height={20} />
        </SkeletonItem>
      ))}
    </SkeletonContainer>
  );
};
