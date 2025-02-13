import { Box, Typography } from "@mui/material";

type Props ={
    name: string;
    icon: any; 
}

const ToolTag = ({ name, icon }: Props) => {
  return (
        <Box
                sx={{
                  bgcolor: "#F3F4F6",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  transition: "background-color 0.3s",
                  
                  '&:hover': {
                    backgroundColor: icon.props.color + '30' // Light variation of the icon color
                  }
                }}
              >
                {icon}
                <Typography variant="body2" ml={0.5}>
                  {name}
                </Typography>
              </Box>
  );
}

export default ToolTag;