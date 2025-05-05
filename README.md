# Saral Lite - ODK Dashboard Integration Prototype

A modern, lightweight version of the Saral Data Integration & Dashboards system that demonstrates integration with ODK data sources and visualization capabilities.

![Dashboard Preview](https://via.placeholder.com/800x400?text=Saral+Lite+Dashboard)

## ✨ Features

- 🎨 Modern, clean UI with Tailwind CSS
- 📊 Interactive data visualization with Chart.js
- 📱 Fully responsive design
- 🔄 Real-time data updates
- 📈 Trend indicators and analytics
- 🔍 Advanced data table with sorting and filtering
- 🎯 Eye-friendly color scheme and typography

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/saral-lite.git
cd saral-lite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## 🏗️ Project Structure

```
saral-lite/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── SummaryCard.jsx    # Card component for key metrics
│   │   ├── ChartCard.jsx      # Chart component with Chart.js
│   │   └── DataTable.jsx      # Sortable and filterable data table
│   │
│   ├── pages/
│   │   └── Dashboard.jsx      # Main dashboard page
│   │
│   ├── services/
│   │   └── api.js            # Mock ODK data service
│   │
│   ├── App.jsx               # Main application component
│   ├── index.js              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
│
├── package.json
└── README.md
```

## 🎨 Design System

### Colors

- Primary: Blue (#0EA5E9)
- Secondary: Green (#22C55E)
- Accent: Orange (#F59E0B)
- Danger: Red (#EF4444)

### Typography

- Font Family: Inter var
- Base Size: 16px
- Scale: 1.25

### Components

#### SummaryCard
- Displays key metrics with trend indicators
- Supports icons and trend percentages
- Hover effects and smooth transitions

#### ChartCard
- Supports multiple chart types (Bar, Pie)
- Responsive design
- Custom color schemes
- Interactive tooltips

#### DataTable
- Sortable columns
- Pagination
- Responsive design
- Custom scrollbar
- Hover effects

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url_here
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with extended theme options. See `tailwind.config.js` for details.

## 🚀 Deployment

The application is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy

## 📈 Future Enhancements

- [ ] Real ODK API integration
- [ ] User authentication
- [ ] More chart types
- [ ] Data export functionality
- [ ] Custom dashboard layouts
- [ ] Dark mode support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Chart.js](https://www.chartjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [Inter Font](https://rsms.me/inter/) 