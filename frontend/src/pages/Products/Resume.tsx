import React, {useState} from 'react';
import Cookies from 'js-cookie';



const Resume: React.FC = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/profile/${Cookies.get('id')}`)
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Resume</h1>
    </div>
  );
}

export default Resume;