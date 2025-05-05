// Mock ODK data
const generateMockData = () => {
  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];
  const answers = ['Yes', 'No', 'Maybe', 'Not Applicable'];
  const totalSubmissions = 156;
  const activeUsers = 23;

  // Generate raw data
  const rawData = Array.from({ length: totalSubmissions }, (_, i) => ({
    id: i + 1,
    user: `User ${Math.floor(Math.random() * activeUsers) + 1}`,
    location: locations[Math.floor(Math.random() * locations.length)],
    submission_date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    answer: answers[Math.floor(Math.random() * answers.length)],
    notes: `Sample note ${i + 1}`,
  }));

  // Calculate location data
  const locationCounts = locations.reduce((acc, location) => {
    acc[location] = rawData.filter(item => item.location === location).length;
    return acc;
  }, {});

  // Calculate answer distribution
  const answerCounts = answers.reduce((acc, answer) => {
    acc[answer] = rawData.filter(item => item.answer === answer).length;
    return acc;
  }, {});

  // Find top location
  const topLocation = Object.entries(locationCounts)
    .sort(([, a], [, b]) => b - a)[0][0];

  return {
    totalSubmissions,
    activeUsers,
    topLocation,
    locationData: {
      labels: locations,
      values: locations.map(location => locationCounts[location]),
    },
    answerDistribution: {
      labels: answers,
      values: answers.map(answer => answerCounts[answer]),
    },
    rawData,
  };
};

export const fetchODKData = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // Simulate random errors (10% chance)
  if (Math.random() < 0.1) {
    throw new Error('Failed to fetch data');
  }

  return generateMockData();
}; 