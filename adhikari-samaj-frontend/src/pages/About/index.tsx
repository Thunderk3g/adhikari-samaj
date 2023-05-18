import {
  Box,
  Container,
  ListItem,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TabPanel } from "src/components/Tabs";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const About = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container
      sx={{
        boxShadow:
          "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        marginY: 2,
        borderRadius: "4px",
        padding: 4,
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h6" ml={2} mb={2}>
        About Us
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="About us"
          sx={{
            minWidth: "220px",
            borderRight: 1,
            borderColor: "divider",
          }}
        >
          <Tab
            label="Vision/Mission"
            {...a11yProps(0)}
            sx={{ alignItems: "flex-start " }}
          />
          <Tab
            label="Responsibilities"
            {...a11yProps(1)}
            sx={{ alignItems: "flex-start " }}
          />
          <Tab
            label="Organizational Info"
            {...a11yProps(2)}
            sx={{ alignItems: "flex-start " }}
          />
          <Tab
            label="Executive Committee"
            {...a11yProps(3)}
            sx={{ alignItems: "flex-start " }}
          />
          <Tab
            label="Member Details"
            {...a11yProps(4)}
            sx={{ alignItems: "flex-start " }}
            onClick={() => navigate("/members")}
          />
        </Tabs>
        <Box flex={1}>
          <TabPanel value={value} index={0}>
            <Typography
              variant="h6"
              mb={2}
              borderBottom={"2px solid #00217c78"}
            >
              Vision/Mission
            </Typography>
            <Stack spacing={2} ml={2}>
              <Typography
                variant="subtitle1"
                sx={{ width: "100%", textAlign: "center" }}
              >
                DIVIDED BY TERRITORY UNIFIED BY COMMUNITY
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                Vision
                <Typography variant="body2">
                  <ol style={{ listStyleType: "decimal", marginTop: 0 }}>
                    <li>
                      Linking people, and the communities through the internet.
                    </li>
                  </ol>
                </Typography>
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                Mission
                <Typography variant="body2">
                  <ol style={{ listStyleType: "decimal", marginTop: 0 }}>
                    <li>
                      Providing information related to the adhikari community
                    </li>
                    <li>Becoming operationally excellent and efficient.</li>
                    <li>Social work</li>
                    <li>Pooja,Daan and Veti.</li>
                    <li>
                      Anticipating changes and responding proactively regarding
                      the community.
                    </li>
                    <li>
                      Know the total population and all the mool places of
                      Ahikari community.
                    </li>
                  </ol>
                </Typography>
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                Values
                <Typography variant="body2">
                  <ol style={{ listStyleType: "decimal", marginTop: 0 }}>
                    <li>
                      Preserve the social values and norms of the Adhikari
                      community and handover to the future generation.
                    </li>
                    <li>
                      Equal treatment, respect and recognition to all the
                      members and donors.
                    </li>
                  </ol>
                </Typography>
              </Typography>
            </Stack>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography
              variant="h6"
              mb={3}
              borderBottom={"2px solid #00217c78"}
            >
              Responsibilities
            </Typography>
            <Typography variant="body1" ml={2}>
              General Post Office is a central office under the Postal Services
              Department, Government of Nepal. It is located in Sundhara, which
              is the heart of the Kathmandu Metropolitan City. Its main
              responsibilities are:
              <Typography variant="body2" mt={2}>
                <ListItem sx={{ display: "list-item" }}>
                  Handling all inbound mail from foreign postal administration
                  to Nepal.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Handling all outbound mail from Nepal to foreign postal
                  administration.
                </ListItem>{" "}
                <ListItem sx={{ display: "list-item" }}>
                  Providing all types of postal services at its own premises and
                  at different post offices and counters in Kathmandu district.
                </ListItem>{" "}
                <ListItem sx={{ display: "list-item" }}>
                  Delivering Letters, Parcel, EMS and other articles within the
                  Kathmandu district.
                </ListItem>{" "}
                <ListItem sx={{ display: "list-item" }}>
                  Providing postal banking and money order services at its own
                  counter.
                </ListItem>
              </Typography>
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Organizational info
          </TabPanel>
          <TabPanel value={value} index={3}>
            Executive Committee
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
