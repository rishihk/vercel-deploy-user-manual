import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Component() {
  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: "100vh", bgcolor: "background.default", py: 12 }}
    >
      <Container maxWidth="md">
        {/* --- HEADER SECTION --- */}
        <Box component="header" sx={{ textAlign: "center", mb: 12 }}>
          {/* Placeholder image for your profile picture */}
          {/* TODO: Replace the src value with the URL or path to your actual profile picture */}
          <Avatar
            alt="John Doe" // TODO: Replace with your actual name
            src="/images/cena.jpg" // Replace with your image path, e.g., "/profile-picture.jpg"
            sx={{ width: 150, height: 150, mb: 4, mx: "auto" }}
          />
          {/* TODO: Replace the text "John Doe" with your full name */}
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: "2.5rem", fontWeight: "bold", mb: 2 }}
          >
            John Doe
          </Typography>
          {/* TODO: Replace "Software Engineer" with your role or major */}
          <Typography variant="h5" sx={{ color: "text.secondary", mb: 4 }}>
            Software Engineer
          </Typography>

          {/* Social media and contact buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            {/* TODO: Replace the email link with your actual email address */}
            <IconButton
              component="a"
              href="mailto:john.doe@example.com"
              color="primary"
            >
              <MailIcon />
              <span className="sr-only">Email</span>
            </IconButton>

            {/* TODO: Replace the phone link with your actual phone number */}
            <IconButton component="a" href="tel:+1234567890" color="primary">
              <PhoneIcon />
              <span className="sr-only">Phone</span>
            </IconButton>

            {/* TODO: Replace LinkedIn URL with your actual LinkedIn profile link */}
            <IconButton
              component="a"
              href="https://linkedin.com"
              color="primary"
            >
              <LinkedInIcon />
              <span className="sr-only">LinkedIn</span>
            </IconButton>

            {/* TODO: Replace GitHub URL with your actual GitHub profile link */}
            <IconButton component="a" href="https://github.com" color="primary">
              <GitHubIcon />
              <span className="sr-only">GitHub</span>
            </IconButton>
          </Box>
        </Box>

        {/* --- MAIN CONTENT SECTION --- */}
        <Box component="main">
          {/* About Me Section */}
          <Box component="section" sx={{ mb: 12 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              About Me
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              {/* Replace this placeholder text with your own introduction */}
            </Typography>
          </Box>

          {/* Education Section */}
          <Box component="section" sx={{ mb: 12 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Education
            </Typography>
            <Card>
              <CardContent sx={{ p: 6 }}>
                {/* TODO: Replace the details below with your actual education info */}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  Bachelor's in Computer Science
                </Typography>{" "}
                {/* Replace with your degree and major */}
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  University of Technology, City, State
                </Typography>{" "}
                {/* Replace with your university, city, and state */}
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Expected Graduation: May 2025
                </Typography>{" "}
                {/* Adjust your expected graduation date */}
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  GPA: 4.00
                </Typography>{" "}
                {/* Replace with your GPA */}
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mt: 2 }}
                >
                  Honors: Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </Typography>{" "}
                {/* Add honors or achievements here */}
              </CardContent>
            </Card>
          </Box>

          {/* Skills Section */}
          <Box component="section" sx={{ mb: 12 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Skills
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent sx={{ p: 6 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      Languages
                    </Typography>
                    {/* TODO: Replace with the programming languages you're proficient in */}
                    <Typography variant="body1" sx={{ color: "text.secondary" }}>
                      JavaScript, Python, Java, C++
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent sx={{ p: 6 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      Frameworks & Tools
                    </Typography>
                    {/* TODO: List the frameworks and tools you use */}
                    <Typography variant="body1" sx={{ color: "text.secondary" }}>
                      React, Node.js, Docker, Git
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent sx={{ p: 6 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      Databases
                    </Typography>
                    {/* TODO: Replace with the databases you're familiar with */}
                    <Typography variant="body1" sx={{ color: "text.secondary" }}>
                      MySQL, MongoDB, PostgreSQL
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent sx={{ p: 6 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      Cloud & DevOps
                    </Typography>
                    {/* TODO: Replace with your Cloud/DevOps skills */}
                    <Typography variant="body1" sx={{ color: "text.secondary" }}>
                      AWS, Azure, Jenkins, Kubernetes
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Professional Experience Section */}
          <Box component="section" sx={{ mb: 12 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Professional Experience
            </Typography>
            {/* Experience 1 */}
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 6 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  Software Engineer Intern
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  Tech Company A, City, State
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  June 2023 - August 2023
                </Typography>
                <Box component="ul" sx={{ pl: 2, color: "text.secondary" }}>
                  <li>
                    Developed full-stack features for a web application used by
                    500+ employees
                  </li>
                  <li>
                    Implemented CI/CD pipelines using Jenkins, reducing
                    deployment time by 30%
                  </li>
                  <li>
                    Optimized database queries, improving application
                    performance by 25%
                  </li>
                </Box>
              </CardContent>
            </Card>
            {/* Experience 2 */}
            <Card>
              <CardContent sx={{ p: 6 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  Junior Developer
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  Tech Startup B, City, State
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  January 2023 - May 2023
                </Typography>
                <Box component="ul" sx={{ pl: 2, color: "text.secondary" }}>
                  <li>
                    Contributed to the development of a mobile app using React
                    Native
                  </li>
                  <li>
                    Collaborated with the design team to implement responsive UI
                    components
                  </li>
                  <li>
                    Participated in code reviews and agile development processes
                  </li>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Projects Section */}
          <Box component="section" sx={{ mb: 12 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Projects
            </Typography>
            <Grid container spacing={4}>
              {/* Project A */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent sx={{ p: 6 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      Project A
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      A web application for managing personal finances
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary" }}>
                      Technologies: React, Node.js, MongoDB
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              {/* Project B */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent sx={{ p: 6 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      Project B
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      An AI-powered chatbot for customer support
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary" }}>
                      Technologies: Python, TensorFlow, AWS
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Leadership & Volunteering Section */}
          <Box component="section" sx={{ mb: 12 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Leadership & Volunteering
            </Typography>
            <Card>
              <CardContent sx={{ p: 6 }}>
                {/* TODO: Add leadership roles or volunteering experience */}
                <Box component="ul" sx={{ pl: 2, color: "text.secondary" }}>
                  <li>President, Computer Science Club (2022-2023)</li>
                  <li>
                    Volunteer, Local Code Camp for Kids (Summer 2022, 2023)
                  </li>
                  <li>
                    Mentor, University Peer Programming Program (2021-2023)
                  </li>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{ mt: 12, textAlign: "center", color: "text.secondary" }}
        >
          {/* TODO: Customize the footer text with your details */}
          <Typography variant="body2">
            © 2024 John Doe. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}
