import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(calculatedBmi);

    if (calculatedBmi < 18.5) {
      setStatus('Underweight');
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      setStatus('Normal weight');
    } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
      setStatus('Overweight');
    } else {
      setStatus('Obese');
    }
  };

  return (
    <Card sx={{ mt: 4, p: 3, bgcolor: 'background.paper' }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          BMI Calculator
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Height (cm)"
            variant="outlined"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            type="number"
            fullWidth
          />
          <TextField
            label="Weight (kg)"
            variant="outlined"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={calculateBMI}
            fullWidth
            sx={{ mt: 2 }}
          >
            Calculate BMI
          </Button>

          {bmi && (
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="h6">Your BMI: {bmi}</Typography>
              <Typography variant="body1">Status: {status}</Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BMI;
