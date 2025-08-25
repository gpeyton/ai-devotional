# Growing in Faith - Children's Daily Devotional Website

A beautiful, responsive website for children's daily devotions designed for ages 3-5. This devotional follows the Westminster Shorter Catechism structure and includes weekly themes, daily lessons, hymns, and prayer points.

## Features

- **Modern, Mobile-Responsive Design**: Clean, child-friendly interface that works on all devices
- **Accordion Navigation**: Easy-to-use weekly navigation with expandable daily lessons
- **Structured Learning**: Five-day weekly pattern with different lesson types:
  - Day 1 & 3: Catechism Questions & Answers
  - Day 2: Wisdom from Proverbs
  - Day 4: God's Character Attributes
  - Day 5: Christian Biography
- **Age-Appropriate Content**: Simple language and concrete concepts for children ages 3-5
- **Memory Verses**: Weekly scripture memorization
- **Classic Hymns**: Traditional hymn suggestions for each lesson
- **Prayer Guidance**: Family prayer points for each day

## Project Structure

```
website/
├── index.html              # Main webpage
├── assets/
│   ├── css/
│   │   └── styles.css      # Modern styling with light theme
│   ├── js/
│   │   └── script.js       # Interactive navigation and content loading
│   └── images/             # Image assets (placeholder)
├── content/
│   ├── weeks/              # Individual week content (HTML format)
│   └── lessons/            # Individual lesson content
├── package.json            # Node.js configuration for Railway
├── railway.toml            # Railway deployment configuration
└── README.md              # This file
```

## Design Features

- **Light Theme**: Clean, bright design suitable for families
- **Typography**: Professional font combination (Inter + Crimson Text)
- **Responsive Grid**: Mobile-first design that scales beautifully
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessibility**: WCAG-compliant color contrast and keyboard navigation
- **Loading States**: User-friendly loading indicators

## Content Structure

Each week follows a consistent pattern:

### Week Structure
- **Memory Verse**: A weekly scripture to memorize as a family
- **5 Daily Lessons**: Each with specific learning objectives
- **Prayer Points**: Guided family prayer suggestions
- **Hymns**: Classic hymn recommendations

### Daily Lesson Types
1. **Catechism Days** (1 & 3): Simplified Westminster Catechism questions and answers
2. **Wisdom Day** (2): Practical lessons from the Book of Proverbs
3. **Attribute Day** (4): Learning about God's character
4. **Biography Day** (5): Stories of faithful Christians throughout history

## Deployment on Railway

This website is configured for easy deployment on Railway:

1. **Connect Repository**: Link your GitHub repository to Railway
2. **Auto-Deploy**: Railway will automatically build and deploy using the configuration files
3. **Custom Domain**: Add your own domain in Railway settings
4. **Environment**: Optimized for production with health checks

### Railway Configuration
- **Builder**: Nixpacks (automatic detection)
- **Start Command**: `npm start` (serves static files)
- **Health Check**: Monitors application health
- **Auto-Restart**: Restarts on failure

## Development

### Local Development
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Open http://localhost:3000
```

### Adding Content
1. Create HTML files in `content/weeks/weekX/dayX.html`
2. Follow the existing content structure and styling
3. Update the JavaScript navigation data if needed

## Content Guidelines

- **Age-Appropriate**: Designed for children ages 3-5
- **Word Count**: 200-270 words per daily lesson
- **Simple Language**: Short sentences (8-12 words), familiar vocabulary
- **Westminster Compliant**: Theologically aligned with Westminster Shorter Catechism
- **Engaging**: Uses illustrations, metaphors, and concrete examples

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Contributing

When adding content:
1. Follow the established HTML structure
2. Maintain consistent styling with CSS classes
3. Ensure mobile responsiveness
4. Test accessibility features
5. Keep content age-appropriate and theologically sound

## License

This devotional content is designed for family and educational use. Please respect copyright for hymns and quoted materials.