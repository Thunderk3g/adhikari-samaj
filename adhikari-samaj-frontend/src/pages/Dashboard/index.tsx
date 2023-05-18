import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { TabPanel } from "src/components/Tabs";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const [value, setValue] = useState(0);

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      cols: 2,
    },
  ];

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        boxShadow:
          "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        borderRadius: "4px",
        padding: 4,
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h6" ml={2} mb={2}>
        Home
      </Typography>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          boxSizing: "border-box",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ pb: 3 }}
        >
          <Tab label="News" {...a11yProps(0)} />
          <Tab label="Notice" {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          News
        </TabPanel>
        <TabPanel value={value} index={1}>
          Notice
        </TabPanel>
      </Box>
      <ImageList variant="quilted" cols={4}>
        {itemData.map(item => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default Dashboard;
