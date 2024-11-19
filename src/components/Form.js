import React, { useState, useRef } from 'react';
import axios from 'axios';
import Switch from 'react-switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      window.alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleContainerClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`} style={{ width: '100vw', height: '100vh' }}>
      
      <div className="absolute top-4 right-4 flex items-center">
        <span className="mr-2">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
        <Switch onChange={toggleTheme} checked={isDarkMode} />
      </div>
      <div className='flex w-full items-center justify-center'>
        <form onSubmit={handleSubmit} className={`p-6  shadow-md w-1/3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="mb-4">
            <label className="block">Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              className={`mt-1 p-2 w-full border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            />
          </div>
          <div className="mb-4">
            <label className="block">Age</label>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={`mt-1 p-2 w-full border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            >
              <option value="">Select Age</option>
              {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block">File Upload</label>
            <div
              className={`mt-1 p-2 w-full border-2 border-dashed rounded ${isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'}`}
              onClick={handleContainerClick}
              style={{ cursor: 'pointer' }}
            >
              {photoURL ? (
                <img src={photoURL} alt="Uploaded" className="w-full h-48 object-cover rounded" />
              ) : (
                <div className="flex flex-col items-center justify-center h-48">
                  <FontAwesomeIcon icon={faUpload} size="2x" className="text-gray-500 mb-2" />
                  <span className="text-gray-500">Click to upload photo</span>
                </div>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
        <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} style={{ height: 513 }}>
          <h2>Uploaded Photo:</h2>
          {photoURL ? (
            <img src={photoURL} alt="Uploaded" className="mt-2 w-48 h-48 object-cover border rounded" />
          ) : (
            <div className="mt-2 w-48 h-48 flex items-center justify-center border rounded bg-gray-200">
              <span className="text-gray-500">No photo uploaded</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;