import { Box, Container } from '@mui/material';

import Hero from '../components/Hero';
import Exercises from './Exercises';

import BMI from '../components/BMI'; // Import the BMI component

const Home = () => {
  return (
    <Box>
    <Box sx={{ bgcolor: 'black.main' }}>
      <Container>
        <Hero />

      </Container>


    </Box>
      <Container>
      <Exercises/>

      </Container>

            {/* BMI Calculator Section */}
            <Container>
        <BMI /> {/* Add BMI Calculator at the bottom */}
      </Container>
    </Box>
  );
};

export default Home;
