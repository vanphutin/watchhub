import React from "react";
import { Stack, Skeleton, Box, Typography } from "@mui/material";

const MovieDetailLoading = () => {
  return (
    <Stack spacing={2} sx={{ padding: 2 }}>
      {/* Tiêu đề trang */}
      <Typography variant="h4">
        <Skeleton
          width="40%"
          animation="wave"
          sx={{ backgroundColor: "#616161" }}
        />
      </Typography>

      {/* Khu vực chính (ảnh và chi tiết) */}
      <Box display="flex" gap={2}>
        {/* Hình ảnh */}
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={300}
          height={450}
          sx={{ backgroundColor: "#424242", borderRadius: "10px" }}
        />

        {/* Nội dung chi tiết */}
        <Stack spacing={1} flexGrow={1}>
          <Skeleton
            width="70%"
            animation="wave"
            sx={{ backgroundColor: "#616161" }}
          />
          <Skeleton
            width="50%"
            animation="wave"
            sx={{ backgroundColor: "#616161" }}
          />
          <Skeleton
            width="80%"
            animation="wave"
            sx={{ backgroundColor: "#616161" }}
          />
          <Skeleton
            width="60%"
            animation="wave"
            sx={{ backgroundColor: "#616161" }}
          />
          <Skeleton
            width="90%"
            animation="wave"
            sx={{ backgroundColor: "#616161" }}
          />
        </Stack>
      </Box>

      {/* Danh sách tập phim */}
      <Stack spacing={1}>
        <Typography variant="h6">
          <Skeleton
            width="30%"
            animation="wave"
            sx={{ backgroundColor: "#616161" }}
          />
        </Typography>
        <Box display="flex" gap={1} flexWrap="wrap">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              animation="wave"
              width={80}
              height={40}
              sx={{ backgroundColor: "#424242", borderRadius: "5px" }}
            />
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};

export default MovieDetailLoading;
