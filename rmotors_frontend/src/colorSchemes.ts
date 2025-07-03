// src/colorSchemes.ts

export const colorSchemes = [
    {
        name: "High-Performance Triad",
        palette: [
            { name: 'Crimson Red', hex: '#E01A4F', type: 'primaryAccent' },
            { name: 'Golden Yellow', hex: '#FFC300', type: 'secondaryAccent' },
            { name: 'Deep Charcoal', hex: '#1A1A1A', type: 'background' },
            { name: 'Soft Grey', hex: '#F2F2F2', type: 'neutral' }
        ],
        psychology: 'Red evokes excitement, urgency, and speed. Yellow brings optimism and attention. Black provides a luxurious, powerful, and sophisticated backdrop.',
        theory: 'Triadic (Red, Yellow, and a strong neutral Black) with high contrast to create a dynamic and energetic feel.',
        application: [
            { color: 'Deep Charcoal', use: 'Dominant for backgrounds, main text, and structural elements.' },
            { color: 'Crimson Red', use: 'Primary call-to-action buttons (e.g., "View Inventory"), sale banners, and performance car sections.' },
            { color: 'Golden Yellow', use: 'Subtle accents, icons, star ratings, or highlighting specific features (e.g., "New Arrivals").' },
            { color: 'Soft Grey', use: 'Secondary text, subtle backgrounds, or dividing lines to provide visual breathing room.' }
        ],
        preview: {
            background: '#1A1A1A',
            card: '#F2F2F2',
            cardHeader: '#1A1A1A',
            cardText: '#333333',
            buttonPrimaryBg: '#E01A4F',
            buttonPrimaryText: '#FFFFFF',
            buttonSecondaryBg: '#FFC300',
            buttonSecondaryText: '#1A1A1A'
        }
    },
    {
        name: "Sleek & Modern Contrast",
        palette: [
            { name: 'Jet Black', hex: '#0A0A0A', type: 'primary' },
            { name: 'Deep Crimson', hex: '#B30000', type: 'accent' },
            { name: 'Gold', hex: '#FFD700', type: 'highlight' },
            { name: 'Charcoal Grey', hex: '#333333', type: 'secondaryText' }
        ],
        psychology: 'Jet Black conveys ultimate luxury and exclusivity. Deep Red represents refined power and passion. Gold provides a small, impactful burst of premium energy.',
        theory: 'High-contrast neutral with two strong, warm accents for a sharp, modern, and hierarchical design.',
        application: [
            { color: 'Jet Black', use: 'Extensive use for backgrounds and navigation bars for a premium, immersive feel.' },
            { color: 'Deep Crimson', use: 'Headlines, active states of buttons, and section dividers.' },
            { color: 'Gold', use: '*Very sparingly* for "Buy Now" buttons, special offer tags, or small interactive elements.' },
            { color: 'Charcoal Grey', use: 'Subheadings and body text to maintain readability against dark backgrounds.' }
        ],
         preview: {
            background: '#0A0A0A',
            card: '#333333',
            cardHeader: '#FFFFFF',
            cardText: '#E0E0E0',
            buttonPrimaryBg: '#B30000',
            buttonPrimaryText: '#FFFFFF',
            buttonSecondaryBg: '#FFD700',
            buttonSecondaryText: '#0A0A0A'
        }
    },
    {
        name: "Dynamic Gradient Analogous",
        palette: [
            { name: 'Vibrant Red', hex: '#D82C2C', type: 'dominant' },
            { name: 'Bright Orange', hex: '#FF8C00', type: 'secondary' },
            { name: 'Sunny Yellow', hex: '#FFD93D', type: 'accent' },
            { name: 'Dark Grey/Black', hex: '#222222', type: 'neutral' },
            { name: 'White', hex: '#FFFFFF', type: 'lightNeutral' }
        ],
        psychology: 'The blend of Red and Orange creates a warm, inviting, and energetic feel suggesting movement. Yellow adds brightness and positivity. Black provides a solid, professional foundation.',
        theory: 'Analogous (Red, Orange, Yellow) with strong neutral support from black and white to balance the vibrancy.',
        application: [
            { color: 'White', use: 'Main content background for maximum readability of specifications and articles.' },
            { color: 'Vibrant Red', use: 'Hero sections and primary calls to action that need to convey strong emotion or urgency.' },
            { color: 'Bright Orange', use: 'Secondary buttons, hover states, or to create subtle gradients with red for a dynamic effect.' },
            { color: 'Sunny Yellow', use: 'Small, impactful icons, badges (e.g., "Best Seller"), or price highlights.' },
            { color: 'Dark Grey/Black', use: 'Navigation, footers, and primary text for structure and stability.' }
        ],
        preview: {
            background: '#FFFFFF',
            card: '#222222',
            cardHeader: '#FFFFFF',
            cardText: '#F0F0F0',
            buttonPrimaryBg: '#D82C2C',
            buttonPrimaryText: '#FFFFFF',
            buttonSecondaryBg: '#FF8C00',
            buttonSecondaryText: '#FFFFFF'
        }
    },
    {
        name: "Sophisticated Edge",
        palette: [
            { name: 'Near Black', hex: '#0D0D0D', type: 'dominantBase' },
            { name: 'Fire Red', hex: '#FF3B30', type: 'primaryAccent' },
            { name: 'Amber Yellow', hex: '#FFC800', type: 'secondaryAccent' },
            { name: 'Slate Grey', hex: '#5C6166', type: 'supportingNeutral' },
            { name: 'Off-White', hex: '#F8F8F8', type: 'text' }
        ],
        psychology: 'Near Black establishes a strong, exclusive brand image. Fire Red provides an exciting visual punch. Amber Yellow adds warmth and a premium feel. Slate Grey offers a cool, professional balance.',
        theory: 'A dominant neutral base with two warm, high-contrast accents, creating a modern, high-end look.',
        application: [
            { color: 'Near Black', use: 'Main background color, large hero image overlays, and section headers.' },
            { color: 'Fire Red', use: 'Primary calls to action, urgent messages, and key interactive elements.' },
            { color: 'Amber Yellow', use: 'Secondary calls to action, pricing, and informational icons.' },
            { color: 'Slate Grey', use: 'Subheadings, descriptive text, and subtle UI elements like borders.' },
            { color: 'Off-White', use: 'All body text to ensure maximum readability against dark backgrounds.' }
        ],
        preview: {
            background: '#0D0D0D',
            card: '#5C6166',
            cardHeader: '#F8F8F8',
            cardText: '#E0E0E0',
            buttonPrimaryBg: '#FF3B30',
            buttonPrimaryText: '#FFFFFF',
            buttonSecondaryBg: '#FFC800',
            buttonSecondaryText: '#0D0D0D'
        }
    },
    {
        name: "Reliable & Innovative",
        palette: [
            { name: 'Midnight Blue', hex: '#1F4068', type: 'primary' },
            { name: 'Vibrant Orange', hex: '#FF7F11', type: 'complementaryAccent' },
            { name: 'Soft Grey', hex: '#E0E0E0', type: 'secondaryNeutral' },
            { name: 'Charcoal', hex: '#3A3A3A', type: 'text' },
            { name: 'Aqua Blue', hex: '#4ECDC4', type: 'highlight' }
        ],
        psychology: 'Midnight Blue is strongly associated with trust, reliability, and security. Vibrant Orange provides a necessary burst of energy and warmth. Aqua Blue adds a modern, technological touch.',
        theory: 'Complementary (Blue and Orange) with supporting neutrals and a modern accent for a balanced, trustworthy, and fresh look.',
        application: [
            { color: 'Soft Grey', use: 'Main content backgrounds, card elements, and subtle dividers.' },
            { color: 'Midnight Blue', use: 'Navigation bars, footers, main section backgrounds, and key headings.' },
            { color: 'Vibrant Orange', use: 'All primary calls to action and interactive elements that need to pop.' },
            { color: 'Charcoal', use: 'All body text for excellent readability.' },
            { color: 'Aqua Blue', use: 'Subtle highlights, icons, or progress indicators to add a touch of modern flair.' }
        ],
        preview: {
            background: '#E0E0E0',
            card: '#FFFFFF',
            cardHeader: '#1F4068',
            cardText: '#3A3A3A',
            buttonPrimaryBg: '#FF7F11',
            buttonPrimaryText: '#FFFFFF',
            buttonSecondaryBg: '#4ECDC4',
            buttonSecondaryText: '#1F4068'
        }
    }
];

export const sophisticatedEdgeScheme = colorSchemes[3]; // Option 4 is at index 3