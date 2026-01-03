# Game Hub

A modern, responsive game discovery platform built with React and TypeScript. Browse, search, and filter thousands of games using the RAWG Video Games Database API.

🚀 **[Live Demo](https://game-hub-hervoli25.vercel.app/)**

## Features

- 🎮 **Browse Games** - Discover games from a vast database
- 🔍 **Search** - Find games by name
- 🎯 **Filter by Genre** - Browse games by genre (Action, RPG, Strategy, etc.)
- 💻 **Filter by Platform** - Filter games by platform (PC, PlayStation, Xbox, Nintendo, etc.)
- 📊 **Sort Options** - Sort by relevance, date added, name, release date, popularity, or rating
- 🌓 **Dark/Light Mode** - Toggle between dark and light themes
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Chakra UI** - Component library and styling
- **Axios** - HTTP client for API requests
- **RAWG API** - Game data provider

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd game-hub
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your RAWG API key:
```
VITE_RAWG_API_KEY=your_api_key_here
```

You can get a free API key from [RAWG.io](https://rawg.io/apidocs)

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
game-hub/
├── src/
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API services
│   ├── theme.ts        # Chakra UI theme configuration
│   ├── App.tsx         # Main app component
│   └── main.tsx        # App entry point
├── public/             # Static assets
└── index.html          # HTML template
```

## Key Components

- **GameGrid** - Displays games in a responsive grid layout
- **GenreList** - Sidebar with genre filtering options
- **PlatformSelector** - Dropdown for platform filtering
- **SortSelector** - Dropdown for sorting options
- **SearchInput** - Search bar for finding games by name
- **NavBar** - Header with logo, search, and theme toggle
- **GameCard** - Individual game card with image, title, and metadata

## API Integration

This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs) to fetch game data. The API provides:
- Game listings with metadata
- Genre information
- Platform details
- Game ratings and popularity metrics

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Game data provided by [RAWG.io](https://rawg.io/)
- UI components from [Chakra UI](https://chakra-ui.com/)

---

**Developed by Hervé Kajingu (Tshombe)**

