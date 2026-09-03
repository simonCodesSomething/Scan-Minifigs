# Scan-Minifigs

Scan-Minifigs is a mobile app for LEGO® minifigure collectors. Quickly scan supported Data Matrix codes, identify minifigures, and keep track of what you own.

> **Status:** Active development / MVP

## Features

- **Scan minifigure codes** — Use your device camera to scan supported Data Matrix codes.
- **Instant identification** — Match scanned codes to the app's minifigure catalog.
- **Collection tracking** — Add or remove minifigures from your collection and track quantities.
- **Browse the catalog** — Explore supported minifigures by series.
- **Collection progress** — See how much of a supported series or catalog you have collected.
- **Series information** — Browse series and view the minifigures included in each one.
- **Catalog synchronization** — Keep the local catalog synchronized with the latest supported data.
- **Camera controls** — Scanner settings include flash, haptics, continuous scanning, and zoom where supported.

## Supported Minifigures

Scan-Minifigs focuses on modern LEGO minifigure releases that contain supported Data Matrix codes.

Support is added progressively as the catalog and code mappings are verified. Older series may be available for browsing without scan support.

The catalog distinguishes between minifigures that can be identified by scanning, minifigures available for browsing and collection tracking, and verified Data Matrix mappings.

## How It Works

1. Open **Scan**.
2. Point the camera at a supported Data Matrix code.
3. Scan-Minifigs reads the code.
4. The code is matched against the app's catalog.
5. The identified minifigure is displayed.
6. Add it to your collection or update its quantity.

Your collection can then be reviewed through the collection and progress views.

## Technology

Scan-Minifigs is built with:

- React Native
- Expo SDK 55
- TypeScript
- Expo Router
- Expo Camera
- Zustand
- AsyncStorage
- Supabase
- PostgreSQL

## Project Structure

```text
Scan-Minifigs/
├── app/
│   └── _layout.tsx
├── assets/
│   └── images/
├── src/
│   ├── components/
│   ├── screens/
│   ├── store/
│   ├── styles/
│   └── ...
├── package.json
├── app.json
├── tsconfig.json
└── README.md
```

The exact structure may change as the project evolves.

## Getting Started

### Prerequisites

Install:

- Node.js
- npm
- Git
- Expo development tooling
- Xcode for local iOS development
- Android Studio for local Android development

### Clone the repository

```bash
git clone https://github.com/simonCodesSomething/Scan-Minifigs.git
cd Scan-Minifigs
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npx expo start
```

You can open the project using an iOS simulator, Android emulator, or a development build.

## Environment Variables

Scan-Minifigs uses Supabase for remote catalog data.

Create a local environment file with:

```text
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

Do **not** commit private credentials, service-role keys, passwords, or other secrets to GitHub.

The public/client key should still be protected by appropriate Supabase permissions and Row Level Security policies.

## Supabase

The backend uses Supabase/PostgreSQL to provide remotely managed catalog data and Data Matrix mappings.

The app can synchronize catalog information so supported minifigures and mappings can be updated without requiring every catalog change to be hard-coded into a new app release.

Relevant data includes:

- Minifigures
- Series
- Data Matrix mappings
- Catalog update/version information

## Data and Privacy

Scan-Minifigs is designed around collection tracking and minifigure identification.

The app requests camera access when needed for scanning. Collection data stored locally on the device is used to maintain the user's collection. Remote catalog data is used to identify and provide information about supported minifigures.

For the latest information about data practices, see the app's published Privacy Policy.

## Building for Release

Before creating a production build:

1. Install dependencies.
2. Verify the Expo SDK and native dependencies.
3. Run TypeScript checks and fix errors.
4. Test scanning on physical devices.
5. Verify catalog synchronization.
6. Test collection persistence.
7. Test iOS and Android where applicable.
8. Confirm the production Supabase configuration.
9. Build using the project's configured EAS workflow.

Useful commands:

```bash
npx expo doctor
npx expo start
```

If EAS Build is configured:

```bash
npx eas build
```

## Testing Checklist

Before releasing a new version:

- [ ] App launches successfully
- [ ] Camera permission flow works
- [ ] Supported Data Matrix codes scan correctly
- [ ] Unknown codes are handled gracefully
- [ ] Identified minifigures display correctly
- [ ] Adding a minifigure updates the collection
- [ ] Removing a minifigure updates the collection
- [ ] Collection data persists after restarting
- [ ] Series browsing works
- [ ] Search/filter functionality works
- [ ] Catalog synchronization works
- [ ] iOS safe-area/header layout is correct
- [ ] Android layout and navigation are correct

## Roadmap

Potential future improvements include:

- Expanded Data Matrix support
- Additional LEGO minifigure series
- Improved catalog discovery
- More detailed collection statistics
- Collection backup/synchronization
- Improved duplicate tracking
- Enhanced scanning performance
- Additional collector-focused tools

## Contributing

Scan-Minifigs is currently primarily developed as an independent project.

If you find a bug or have a suggestion, open an issue with:

- A clear description of the problem
- Steps to reproduce it
- Expected behavior
- Actual behavior
- Device/platform information
- Relevant screenshots or logs, when appropriate

Please do not include private credentials, API keys, or other sensitive information in issues.

## Disclaimer

LEGO® is a trademark of the LEGO Group, which does not sponsor, authorize, or endorse Scan-Minifigs.

Scan-Minifigs is an independent, unofficial application created for collectors.

LEGO® product names, trademarks, and other intellectual property remain the property of the LEGO Group.

## License

If the repository is intended to be distributed under an open-source license, add the chosen license here.

If the project is not currently open source, replace this section with the appropriate proprietary-license notice.

## Contact

For app support, feedback, or business inquiries, use the contact information published with the Scan-Minifigs app.

---

**Scan-Minifigs** — Scan it. Find it. Collect it.
