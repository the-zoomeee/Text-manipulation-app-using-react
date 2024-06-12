# TextChef

TextChef is a simple text manipulation tool built using React. It allows users to perform various operations on text such as clearing, copying, pasting, converting to uppercase or lowercase, and removing extra spaces. Additionally, it provides a summary of the text including the number of lines, words, and characters.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Pages](#pages)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Clear**: Clears the text input.
- **Copy**: Copies the text to the clipboard.
- **Paste**: Pastes text from the clipboard into the input area.
- **Convert to Upper Case**: Converts the text to uppercase.
- **Convert to Lower Case**: Converts the text to lowercase.
- **Remove Extra Spaces**: Removes extra spaces from the text.
- **Text Summary**: Provides a summary of the text including the number of lines, words, and characters.
- **Dark Mode**: Toggle between light and dark modes.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/TextChef.git
    ```

2. Navigate to the project directory:
    ```sh
    cd TextChef
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm start
    ```

## Usage
- Open your browser and navigate to `http://localhost:3000`.
- Use the navigation bar to switch between Home, About, and Contact pages.
- Type or paste your text into the text area on the Home page and use the provided buttons to manipulate the text.
- Toggle between light and dark modes using the switch in the navigation bar.

## Components

### Navbar
Located in `src/components/Navbar.js`
- A navigation bar to navigate between different pages and toggle dark mode.

### Alert
Located in `src/components/Alert.js`
- Displays alert messages based on user actions.

## Pages

### Home (AppForm)
Located in `src/pages/Home.js`
- The main page where users can manipulate text.

### About
Located in `src/pages/About.js`
- Provides information about the app and its features.

### Contact
Located in `src/pages/Contact.js`
- A form for users to reach out with questions or feedback.

### NotFound
Located in `src/pages/NotFound.js`
- Displays a 404 message when a user navigates to a non-existent route.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
