import { Box, Typography } from "@mui/material";

export type TComponentProps = {};

const Component = ({}: TComponentProps) => {
  return (
    <>
      <Box>
        <Typography variant="body1">This is a component.</Typography>
      </Box>
    </>
  );
};

export default Component;
