import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Grid,
  Avatar,
  IconButton,
  List,
  ListItem,
  Divider,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import FolderIcon from "@mui/icons-material/Folder";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import PdfIcon from "@mui/icons-material/Description";
import "../styles/HomePage.css"

const HomePage = () => {
  return (
    <Box>
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Untitled UI
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button>Home</Button>
            <Button>Products</Button>
            <Button>Resources</Button>
            <Button>Pricing</Button>
          </Box>
          <Avatar src="/profile.jpg" />
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        textAlign="center"
        mt={4}
        px={2}
        sx={{
          borderTop: "4px solid #e0e0e0",
          borderLeft: "4px solid #e0e0e0",
          borderRight: "4px solid #e0e0e0",
          borderRadius: "8px 8px 0 0",
          pb: 2,
        }}
      >
        <Chip label="New feature" color="secondary" />
        <Typography variant="body2" sx={{ mt: 1, mb: 2, color: "primary.main" }}>
          Check out the team dashboard →
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Beautiful analytics to grow smarter
        </Typography>
        <Typography variant="body1" sx={{ my: 2, maxWidth: 600, mx: "auto" }}>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="outlined" size="large">
            Demo
          </Button>
          <Button variant="contained" size="large">
            Sign up
          </Button>
        </Box>
      </Box>

      {/* Dashboard Section */}
      <Grid container mt={4} px={2} spacing={2} sx={{
        borderTop: "5px solid black",
        borderLeft: "5px solid black",
        borderRight: "5px solid black",
        borderRadius: "8px 8px 0 0",
        pb: 2,
      }}>
        {/* Sidebar */}
        <Grid item xs={2}>
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              height: "100%",
              borderRadius: 2,
              py: 2,
              textAlign: "center",
            }}
          >
            <List>
              <ListItem>
                <HomeIcon fontSize="large" />
              </ListItem>
              <ListItem>
                <BarChartIcon fontSize="large" />
              </ListItem>
              <ListItem>
                <FolderIcon fontSize="large" />
              </ListItem>
              <ListItem>
                <LanguageIcon fontSize="large" />
              </ListItem>
              <ListItem>
                <PersonIcon fontSize="large" />
              </ListItem>
            </List>
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid item xs={7}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Stats for Olivia Rhye
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box>
              <Button variant="outlined" sx={{ mr: 1 }}>
                12 months
              </Button>
              <Button variant="outlined" sx={{ mr: 1 }}>
                30 days
              </Button>
              <Button variant="outlined">7 days</Button>
            </Box>
            <Box>
              <Button variant="contained" sx={{ mr: 1 }}>
                Messages
              </Button>
              <Button variant="outlined">Edit</Button>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              height: 200,
              mt: 3,
              borderRadius: 2,
              textAlign: "center",
              lineHeight: "200px",
            }}
          >
            Graph Placeholder
          </Box>

          {/* Biggest Fans Section */}
          <Box mt={4} sx={{
            borderTop: "5px solid black",
            borderLeft: "5px solid black",
            borderRight: "5px solid black",
            borderRadius: "8px 8px 0 0",
            pb: 2,
          }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Biggest fans
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar src="/fan1.jpg" sx={{ mr: 2 }} />
                <Typography>Phoenix Baker (@phoenix.baker)</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar src="/fan2.jpg" sx={{ mr: 2 }} />
                <Typography>Lana Steiner (@lanasteiner)</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Chat Section */}
        <Grid item xs={3}>
          <Card sx={{
            borderTop: "5px solid black",
            borderLeft: "5px solid black",
            borderRight: "5px solid black",
            borderRadius: "8px 8px 0 0",
          }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Box display="flex" alignItems="center">
                  <Avatar src="/anita.jpg" sx={{ mr: 1 }} />
                  <Typography variant="h6">Anita Cruz</Typography>
                </Box>
                <Typography variant="body2" color="green">
                  Online
                </Typography>
              </Box>
              <Divider />
              <Box mt={2}>
                <Box
                  sx={{
                    backgroundColor: "#e0e0e0",
                    p: 1,
                    borderRadius: 1,
                    mb: 1,
                  }}
                >
                  <Typography variant="body2">
                    Hey Olivia, can you check the latest design updates?
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "white",
                    p: 1,
                    borderRadius: 1,
                    mb: 1,
                    alignSelf: "flex-end",
                  }}
                >
                  <Typography variant="body2">
                    Sure, let me have a look.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#e0e0e0",
                    p: 1,
                    borderRadius: 1,
                    mb: 1,
                  }}
                >
                  <Typography variant="body2">
                    Great! Let me know if you need any changes.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "white",
                    p: 1,
                    borderRadius: 1,
                    alignSelf: "flex-end",
                  }}
                >
                  <Typography variant="body2">
                    Will do. Thanks!
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Box mt={6} px={2}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}>
          Join 4,000+ companies already growing
        </Typography>
        <Grid container spacing={2} sx={{ justifyContent: "center", mb: 6 }}>
          <Grid item>
            <Avatar src="/logos/boltshift.png" variant="square" />
          </Grid>
          <Grid item>
            <Avatar src="/logos/lightbox.png" variant="square" />
          </Grid>
          <Grid item>
            <Avatar src="/logos/featherdev.png" variant="square" />
          </Grid>
          <Grid item>
            <Avatar src="/logos/spherule.png" variant="square" />
          </Grid>
          <Grid item>
            <Avatar src="/logos/globalbank.png" variant="square" />
          </Grid>
          <Grid item>
            <Avatar src="/logos/nietzsche.png" variant="square" />
          </Grid>
        </Grid>

        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Analytics that feels like it's from the future
            </Typography>
            <Typography>
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Share team inboxes
            </Typography>
            <Typography>
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Deliver instant answers
            </Typography>
            <Typography>
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Manage your team with reports
            </Typography>
            <Typography>
              Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Connect with customers
            </Typography>
            <Typography>
              Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Connect the tools you already use
            </Typography>
            <Typography>
              Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Our people make the difference
            </Typography>
            <Typography>
              We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
            </Typography>
          </Grid>
        </Grid>
        
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}>
        Sisyphus
        </Typography>
        <Grid item xs={12}>
            <Typography variant="h6" sx={{ textAlign:"center", fontWeight: "bold" }}>
              Our people make the difference
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold",textAlign:"center" }}>
                   We've been using Untitled to kick start every new project and can't imagine working without it.
            </Typography>
            <Box sx={{ mt: 2 ,textAlign:"center"}}>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar src="/fan1.jpg" sx={{ mr: 2}} />
                <Typography sx={{fontWeight: "bold" }}>Candice Wu</Typography>
                <Typography>Product Manager, Sisyphus</Typography>
              </Box>
            </Box>
          </Grid>
      </Box>
    </Box>
  );
};
export default HomePage;