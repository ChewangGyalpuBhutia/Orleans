# React Form with Dark Mode and File Upload

This project is a React application that includes a form with the following features:
- Light and Dark mode toggle
- Name and Age input fields
- File upload with a preview
- Form submission with an alert on success

## Features

- **Light/Dark Mode Toggle**: Switch between light and dark themes using a toggle switch.
- **Form Fields**: Input fields for name and age.
- **File Upload**: Upload an image file and preview it within a dashed container.
- **Form Submission**: Submit the form and display an alert on successful submission.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-form-dark-mode.git
   cd react-form-dark-mode

2. Install dependencies::
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

## Usage

### Dark Mode Toggle
- Use the toggle switch to switch between Light and Dark modes.
- The form and UI will automatically adjust to the selected theme.

### Form Fields
- Enter your name and age in the respective fields.
- Ensure that all fields are filled before submitting.

### File Upload
- Drag and drop an image file into the dashed container, or click to browse and upload.
- The image preview will be displayed within the container.

### Submit the Form
- Once all fields are filled and a file is uploaded, click on the Submit button.
- A success alert will appear indicating that the form has been submitted.


## FastAPI Backend

This project includes a FastAPI backend to handle form submissions.

### Features

- **Form Submission Endpoint**: Accepts form data including name, age, and file upload.

### Installation

1. Create a virtual environment:
   ```bash
   python -m venv venv

## Activate the virtual environment

- On Windows:
  ```bash
  .\venv\Scripts\activate

## Install the dependencies:
  ```bash
    pip install fastapi uvicorn
  ```
  
## Run the FastApi application
     ```bash
    uvicorn main:app --reload
  
