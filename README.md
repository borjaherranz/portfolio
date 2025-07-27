# Porfolio

A first introduction to Astro and Tailwind.css to create a custom resume and a portfolio for the project I have already worked on as well as new ones.

[![pnpm](https://img.shields.io/badge/pnpm-8+-F69220?logo=pnpm)](https://pnpm.io/)
[![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

## Tech Stack

## Getting Started

### Prerequisites

- pnpm 8+
- Node.js 18+
- Astro 5.12.3

### Installation

1. Clone the repository with the following commands

```bash
git clone https://github.com/borjaherranz/portfolio
```

2. Install dependencies
The main dependency you need to install is Astro, a JS framework built to create fast web applications.

```bash
pnpm create astro@latest
```

3. Run the development server
   PS: For more information about it, please reach out: https://docs.astro.build/en/reference/cli-reference/

```bash
pnpm astro dev
```

4. Open a browser with the http://localhost:4321 (Houston, do we really have a problem? |=D)
5. Customize your curriculum vitae in the ./src/resources/cv.json file

## Project structure

```
src/
├── assets
|    ├── astro.svg              # By default
|    ├── background.svg         # By default
├── components
|    ├── curriculum_vitae       # Folder with all components needed for creating the curriculum vitae
|        ├── About.astro
|        ├── Education.astro
|        ├── Experience.astro
|        ├── Header.astro
|        ├── Skills.astro
├── layouts
|    ├── Layout.astro           # Main component from Astro to create the layout
├── pages
    ├── certifications.astro    # It contains all the certificates the user earned
    ├── index.astro             # It contains the main page for the CV
    ├── projects.astro          # It contains all the projects part of the portfolio
├── resources
    ├── cv.json                 # It contains the main JSON structure for creating a csv
```

## Customization

### Resume Data
All the data related with your resume is contained in the cv.json file
```json
{
  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "image": "",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "url": "https://johndoe.com",
    "summary": "A summary of John Doe…",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    ...
}
```
For more information, please visit https://www.jsonresume.org/schema

### Styling
For styling the main CV as well as other pages, it uses Tailwind.css (in progress)
For installing to your Astro project, just run the script:
```bash
pnpm install tailwindcss @tailwindcss/vite
```

## Docker Deployment

### Using DockerCompose

```bash
# Build the container
docker compose build

# Run the container
docker compose up -d

# Stop the container
docker compose down
```

### Using Docker directly

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

## Configuration variables

### Environmental variables
Currently, no environmental variables are defined for this porject.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
